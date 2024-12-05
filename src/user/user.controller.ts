import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';

@Controller('users')
export class UserController {
  @Get()
  @UseGuards(JwtAuthGuard)
  checking(): String {
    return 'This is a protected route';
  }
}
