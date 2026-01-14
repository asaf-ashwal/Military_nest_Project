import { Injectable } from '@nestjs/common';
import { Shift } from './shift.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { type shiftType } from './dto/shiftType';
import { AssignmentService } from 'src/assignment/assignment.service';
// import { UsersService } from 'src/users/users.service';

@Injectable()
export class ShiftService {
  constructor(
    @InjectRepository(Shift)
    private shiftRepository: Repository<Shift>,
    private readonly assignmentService: AssignmentService,
  ) {}
  // const commanderId =23
  // const soldierId =''


  async creatShift({
    endAt,
    location,
    startAt,
    // commanderId,
    // soldierId,
  }: shiftType) {
    // const createAssignment = await this.assignmentService.createAssignment(
    //   commanderId,
    //   soldierId,
    // );
    const DbShift = await this.shiftRepository.save({
      endAt,
      location,
      startAt,
    });
    return DbShift;
  }
}
