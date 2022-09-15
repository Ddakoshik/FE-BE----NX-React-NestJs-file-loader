import { Controller, Get, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private todosService: TodoService
  ) {}

  // @Get()
  // getData() {
  //   return this.appService.getData();
  // }

  @Get('api')
  getData() {
    return this.todosService.getTodos();
  }

  @Get('api/index')
  @Render('index')
  root() {
    return {
      todos: this.getData(),
    };
  }
}

