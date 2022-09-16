import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-tasks-status.dto';
import { Task, TasksService, TaskStatus } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
        return this.tasksService.getTasksWithFilters(filterDto);
    } else {
        return this.tasksService.getAllTasks();
    }
  }

  @Post()
  createTask(@Body() createtaskDto: CreateTaskDto): Task {
    return this.tasksService.create(createtaskDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id/status')
  update(@Param('id') id: string, @Body() updateTaskStatusDto: UpdateTaskStatusDto) {
    const {status} = updateTaskStatusDto;
    return this.tasksService.update(id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.tasksService.remove(id);
  }
}
