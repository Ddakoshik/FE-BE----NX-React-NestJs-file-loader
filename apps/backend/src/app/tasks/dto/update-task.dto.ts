import { PartialType } from '@nestjs/swagger';
import { TaskStatus } from "../enum/task-status.enum";
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    status: TaskStatus;
}
