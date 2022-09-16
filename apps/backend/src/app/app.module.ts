import { AuthModule } from '@file-share/auth';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [AuthModule, TasksModule],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
