import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Assignment } from './assignment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssignmentService {
  constructor(
     @InjectRepository(Assignment)
    private assignmentRepository: Repository<Assignment>,
    private readonly usersService: UsersService, 
  ) {}

  async createAssignment(commanderId: number, soldierId: number){
    const soldier = await this.usersService.findOne(soldierId);
    const commander = await this.usersService.findOne(commanderId);
    if (!soldier) throw 'We dont have this soldier';
    if (!commander) throw 'We dont have this commander';

    const assignment = await this.assignmentRepository.save({userId:soldierId})
    // to create Assignment
// 
    return true;
  }
}
