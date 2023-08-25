"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWatchedUseCase = void 0;
class GetWatchedUseCase {
    constructor(watchedData) {
        this.watchedData = watchedData;
    }
    async execute({ userId }) {
        const response = await this.watchedData.getWatcheds({
            userId,
        });
        if (!response) {
            return null;
        }
        return response;
    }
}
exports.GetWatchedUseCase = GetWatchedUseCase;
//# sourceMappingURL=GetWatchedsUseCase.js.map