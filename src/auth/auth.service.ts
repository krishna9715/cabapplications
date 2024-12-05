import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class AuthService {
  private client;
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UserService,
  ) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    this.client = Twilio(accountSid, authToken);
  }

  // Validate a user by username and password
  async validateUser(phone: string, otp: string): Promise<any> {
    const user = await this.usersService.findOneByPhone(phone);
    if (user && user.otp == otp) {
      const { otp, ...result } = user;
      return result;
    }
    return null;
  }

  async requestOtp(phone: string): Promise<any> {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const user = await this.usersService.findOneByPhone(phone);
    if (!user) {
      await this.usersService.createUser('New User', phone, otp);
    } else {
      await this.usersService.updateUser(user.id, user.name, user.phone, otp);
    }

    try {
      const message = await this.client.messages.create({
        body: `Your OTP is ${otp}`,
        from: '+17754166585',
        to: phone,
      });

      console.log('Message SID:', message.sid);

      return { message: 'OTP sent successfully' };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error sending OTP. Please try again later.',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Generate a JWT token
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
