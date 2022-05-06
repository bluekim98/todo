import { Global, Module } from '@nestjs/common';
import { databaseConnection } from './connection.config';

@Global()
@Module({
    providers: [databaseConnection],
    exports: [databaseConnection],
})
export class DatabaseModule {}
