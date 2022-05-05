import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity('task_relation')
export class TaskRelation {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'id' })
    id?: number;

    @Column({ type: 'int', name: 'parent_id' })
    parentId: number;

    @Column({ type: 'int', name: 'child_id' })
    childId: number;

    @CreateDateColumn({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'created_at',
    })
    createdAt?: Date;

    @ManyToOne(() => Task, (task) => task.childTaskRelations)
    @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
    parent?: Task;

    @ManyToOne(() => Task, (task) => task.parentTaskRelation)
    @JoinColumn({ name: 'child_id', referencedColumnName: 'id' })
    child?: Task;
}
