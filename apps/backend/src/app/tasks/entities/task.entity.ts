import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../auth/user.entity';
import { TaskStatus } from '../enum/task-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'varchar', nullable: true })
  status: TaskStatus;

  @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
  user: User;
}
