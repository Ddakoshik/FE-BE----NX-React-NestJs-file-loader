import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { TaskStatus } from "../enum/task-status.enum";

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
}
