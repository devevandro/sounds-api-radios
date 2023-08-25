"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchedUseCase = void 0;
class WatchedUseCase {
    constructor(watchedData) {
        this.watchedData = watchedData;
    }
    async execute(params) {
        const response = await this.watchedData.create(params);
        if (!response) {
            return null;
        }
        return response;
    }
}
exports.WatchedUseCase = WatchedUseCase;
//# sourceMappingURL=WatchedUseCase.js.map