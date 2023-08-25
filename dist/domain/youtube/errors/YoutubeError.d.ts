import AppError from '../../../core/AppError';
type ErrorResponse = {
    message: string;
    code?: number;
};
export declare class YoutubeError extends AppError {
    constructor(errorResponse: ErrorResponse);
}
export {};
