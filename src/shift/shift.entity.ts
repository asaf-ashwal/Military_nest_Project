import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  startAt: string;

  @Column()
  endAt: string;
}
