"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeError = void 0;
const AppError_1 = require("../../../core/AppError");
class YoutubeError extends AppError_1.default {
    constructor(errorResponse) {
        const { message, code } = errorResponse;
        super(message, code);
        this.name = 'PlaylistError';
    }
}
exports.YoutubeError = YoutubeError;
//# sourceMappingURL=YoutubeError.js.map