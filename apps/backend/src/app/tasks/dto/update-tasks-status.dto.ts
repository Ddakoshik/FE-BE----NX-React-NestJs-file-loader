import { TaskStatus } from "../tasks.service";
import { IsEnum } from "class-validator";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;
}
