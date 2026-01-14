import { Body, Controller, Post } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async createUser(@Body() user: Users) {
    const result = await this.usersService.createUser(user);
    return result;
  }
}
