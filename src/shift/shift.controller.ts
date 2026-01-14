import { Body, Controller, Post } from '@nestjs/common';
import { Shift } from './shift.entity';
import { ShiftService } from './shift.service';
import { type shiftType } from './dto/shiftType';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Post('create')
  async createShift(@Body() Body: shiftType) {
    const result = await this.shiftService.creatShift(Body);
    return result;
  }
}
