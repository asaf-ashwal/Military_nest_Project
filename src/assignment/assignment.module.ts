import { Module } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AssignmentSchema } from './assignment.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AssignmentSchema]), UsersModule],
  providers: [AssignmentService],
  exports: [AssignmentService],
})
export class AssignmentModule {}
