import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app-config.module';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './task/task.module';

@Module({
    imports: [AppConfigModule, DatabaseModule, TaskModule],
})
export class AppModule {}
