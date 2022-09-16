import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();
    if (status) {
      tasks = tasks.filter((item) => item.status === status);
    }

    if (search) {
      tasks = tasks.filter((item) => {
        return item.title.includes(search) || item.description.includes(search);
      });
    }
    return tasks;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  findOne(id: string): Task {
    const found = this.tasks.find((item) => item.id === id);

    if (!found) {
        throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  update(id: string, status: TaskStatus): Task {
    this.tasks = this.tasks.map((item) => {
      return item.id === id ? { ...item, status } : item;
    });
    return this.findOne(id);
  }

  remove(id: string): void {
    const found = this.findOne(id)
    this.tasks = this.tasks.filter((item) => item.id !== found.id);
  }
}
