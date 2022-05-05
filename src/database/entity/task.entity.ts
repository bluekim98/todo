import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { TaskRelation } from './task-relation.entity';

export enum TaskType {
    TODO = 'TODO',
    NOT_TODO = 'NOT_TODO',
}

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'id' })
    id?: number;

    @Column({ type: 'varchar', name: 'type' })
    type: TaskType;

    @Column({ type: 'int', name: 'weight' })
    weight: number;

    @Column({ type: 'varchar', name: 'title' })
    title: string;

    @Column({ type: 'boolean', name: 'is_done', default: false })
    isDone?: boolean;

    @CreateDateColumn({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'created_at',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
    })
    updatedAt?: Date;

    @OneToMany(() => TaskRelation, (taskRelation) => taskRelation.child)
    @JoinColumn({ name: 'id', referencedColumnName: 'child_id' })
    parentTaskRelation?: TaskRelation[];

    @OneToMany(() => TaskRelation, (taskRelation) => taskRelation.parent)
    @JoinColumn({ name: 'id', referencedColumnName: 'parent_id' })
    childTaskRelations?: TaskRelation[];
}
