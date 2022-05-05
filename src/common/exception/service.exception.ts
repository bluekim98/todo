import { HttpException, HttpStatus } from '@nestjs/common';

export class ServiceException extends HttpException {
    private subCode: number | undefined;
    constructor(
        message: string,
        status: HttpStatus = HttpStatus.BAD_REQUEST,
        subCode?: number,
    ) {
        super(message, status);
        this.subCode = subCode;
    }
}
