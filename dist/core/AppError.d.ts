import { HttpException } from '@nestjs/common';
declare abstract class AppError extends HttpException {
    readonly statusCode: number;
    constructor(message: string, statusCode?: number);
}
export default AppError;
