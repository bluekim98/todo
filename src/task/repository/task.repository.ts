import { Inject, Injectable } from '@nestjs/common';
import { Task } from '@src/database/entity/task.entity';
import { TypeormRepository } from '@src/database/service/typeorm.repository';
import { Repository } from 'typeorm';

@Injectable()
export class TaskRepository extends TypeormRepository<Task, number> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly repository: Repository<Task>,
    ) {
        super(repository);
    }
}
