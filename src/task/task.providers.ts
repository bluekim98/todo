import { Task } from '@src/database/entity/task.entity';
import { DataSource } from 'typeorm';

export const taskProviders = [
    {
        provide: 'TASK_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
        inject: ['DATABASE_CONNECTION'],
    },
];
