import { TaskStatus } from "../enum/task-status.enum";
import { IsNotEmpty, IsOptional, IsEnum } from "class-validator";

export class GetTasksFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search?: string;
}
