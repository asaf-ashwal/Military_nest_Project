// import { EntitySchema } from 'typeorm';
// import { Users } from '../users/users.entity';

import { EntitySchema } from 'typeorm';
import { Assignment } from './assignment.entity';

export const AssignmentSchema = new EntitySchema<Assignment>({
  name: 'Assignment',
  target: Assignment,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      unique: true,
    },
    shiftId: {
      type: Number,
    },
    userId: {
      type: Number,
    },
  },
});
