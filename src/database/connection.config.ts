import { AppConfigService } from 'src/config/service/app-config.service';
import { DataSource } from 'typeorm';
import { TaskRelation } from './entity/task-relation.entity';
import { Task } from './entity/task.entity';

const entities = [Task, TaskRelation];

export const databaseConnection = {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (config: AppConfigService) => {
        const dataSource = new DataSource({
            type: 'mysql',
            replication: {
                master: {
                    host: config.get('MYSQL_MASTER_HOST'),
                    port: config.get<number>('MYSQL_MASTER_PORT'),
                    username: config.get('MYSQL_MASTER_USER'),
                    password: config.get('MYSQL_MASTER_PASSWORD'),
                    database: config.get('MYSQL_MASTER_DATABASE'),
                },
                slaves: [
                    {
                        host: config.get('MYSQL_SLAVE_HOST'),
                        port: config.get<number>('MYSQL_SLAVE_PORT'),
                        username: config.get('MYSQL_SLAVE_USER'),
                        password: config.get('MYSQL_SLAVE_PASSWORD'),
                        database: config.get('MYSQL_SLAVE_DATABASE'),
                    },
                ],
            },
            entities,
            synchronize: true,
            logging: ['query', 'error'],
            maxQueryExecutionTime: 500,
            extra: {
                connectionLimit: 10,
            },
        });
        return await dataSource.initialize();
    },
    inject: [AppConfigService],
};
