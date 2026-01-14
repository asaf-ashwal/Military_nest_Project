import { EntitySchema } from 'typeorm';
import { Users } from './users.entity';

export const UsersSchema = new EntitySchema<Users>({
  name: 'Users',
  target: Users,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      unique: true,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
  },
});
