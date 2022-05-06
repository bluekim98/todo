import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ServiceException } from '@src/common/exception/service.exception';

@Injectable()
export class AppConfigService {
    constructor(private readonly config: ConfigService) {}

    get<T = string>(property: string): T {
        const value = this.config.get<T>(property);
        if (!value) throw new ServiceException('not exist property');
        return value;
    }
}
