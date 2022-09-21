import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TodoService } from './todo/todo.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: [`.env.stage.${process.env.STAGE}`]
      envFilePath: '.env.stage.dev'
    }),
    AuthModule,
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get('DB_HOST'))
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '11111111',
          database: 'task-management',
          autoLoadEntities: true,
          synchronize: true,
        }
      }

    }),
  ],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
