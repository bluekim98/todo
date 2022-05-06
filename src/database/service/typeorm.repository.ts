import {
    Repository,
    FindManyOptions,
    FindOneOptions,
    In,
    UpdateResult,
    DeleteResult,
    InsertResult,
} from 'typeorm';

interface TypeormRepositoryI<E, K> {
    find(options: FindManyOptions<E>): Promise<E[]>;
    findOne(options: FindOneOptions<E>): Promise<E | undefined>;
    findOneOrFail(options: FindOneOptions<E>): Promise<E>;
    save(entity: E): Promise<E>;
    saveBulk(entitys: E[]): Promise<E[]>;
    update(id: K, entity: E): Promise<UpdateResult>;
    delete(id: K): Promise<DeleteResult>;
    deleteBulk(ids: number | string[]): Promise<DeleteResult>;
    insert(entity: E): Promise<InsertResult>;
    insertBulk(entitys: E[]): Promise<InsertResult>;
}

export class TypeormRepository<
    E extends Record<string, any>,
    K extends number | string = number,
> implements TypeormRepositoryI<E, K>
{
    constructor(private readonly entityRepository: Repository<E>) {}

    async find(options: FindManyOptions<E>): Promise<E[]> {
        return await this.entityRepository.find(options);
    }

    async findOne(options: FindOneOptions<E>): Promise<E | undefined> {
        const data = await this.entityRepository.findOne(options);
        return data ?? undefined;
    }

    async findOneOrFail(options: FindOneOptions<E>): Promise<E> {
        return await this.entityRepository.findOneOrFail(options);
    }

    async save(entity: E): Promise<E> {
        return await this.entityRepository.save(entity);
    }

    async saveBulk(entitys: E[]): Promise<E[]> {
        if (!entitys.length) return [];
        return await this.entityRepository.save(entitys);
    }

    async update(id: K, entity: E): Promise<UpdateResult> {
        return await this.entityRepository.update(id, entity);
    }

    async delete(id: K): Promise<DeleteResult> {
        return await this.entityRepository.delete(id);
    }

    async deleteBulk(ids: number | string[]): Promise<DeleteResult> {
        return await this.entityRepository.delete(ids);
    }

    async insert(entity: E): Promise<InsertResult> {
        return await this.entityRepository.insert(entity);
    }

    async insertBulk(entitys: E[]): Promise<InsertResult> {
        return await this.entityRepository.insert(entitys);
    }
}
