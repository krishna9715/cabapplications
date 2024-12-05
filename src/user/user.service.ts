import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOneById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findOneByPhone(phone: string): Promise<User> {
    return this.userRepository.findOneBy({ phone });
  }

  async createUser(name: string, phone: string, otp: string): Promise<User> {
    const user = this.userRepository.create({ name, phone, otp });
    return this.userRepository.save(user);
  }

  async updateUser(
    id: number,
    name: string,
    phone: string,
    otp: string,
  ): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User not found');
    }
    user.name = name ?? user.name;
    user.phone = phone ?? user.phone;
    user.otp = otp ?? user.otp;
    return this.userRepository.save(user);
  }
}
