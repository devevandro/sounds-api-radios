"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class AppError extends common_1.HttpException {
    constructor(message, statusCode = 400) {
        super(message, statusCode);
        this.statusCode = statusCode;
    }
}
exports.default = AppError;
//# sourceMappingURL=AppError.js.map