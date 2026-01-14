import { EntitySchema } from 'typeorm';
import { Shift } from './shift.entity';

export const ShiftSchema = new EntitySchema<Shift>({
  name: 'Shift',
    target: Shift,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      unique: true,
    },
    location: {
      type: String,
    },
    startAt: {
      type: String,
    },
    endAt: {
      type: String,
    },
    
  },
});
