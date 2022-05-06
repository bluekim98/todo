import { Module } from '@nestjs/common';
import { TaskRepository } from './repository/task.repository';
import { TaskService } from './service/task.service';
import { taskProviders } from './task.providers';

@Module({
    providers: [...taskProviders, TaskService, TaskRepository],
})
export class TaskModule {}
