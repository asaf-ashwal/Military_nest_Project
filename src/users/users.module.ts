import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersSchema } from './users.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UsersSchema])],
  providers: [UsersService],

  controllers: [UsersController],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
