import { Module } from '@nestjs/common';
import { databaseConnection } from './connection.config';

@Module({
    providers: [databaseConnection],
    exports: [databaseConnection],
})
export class DatabaseModule {}
