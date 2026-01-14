import { Module } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShiftSchema } from './shift.schema';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
// import { AssignmentService } from 'src/assignment/assignment.service';
import { AssignmentModule } from 'src/assignment/assignment.module';
import { ShiftController } from './shift.controller';
import { Repository } from 'typeorm';

@Module({
  imports: [
    UsersModule,
    AssignmentModule,
    Repository,
    TypeOrmModule.forFeature([ShiftSchema]),
  ],
  providers: [UsersService, ShiftService
    // , AssignmentService
  ],
  controllers: [ShiftController],
  exports: [ShiftService],
})
export class ShiftModule {}
