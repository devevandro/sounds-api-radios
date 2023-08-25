"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchVideosUseCase = void 0;
class SearchVideosUseCase {
    constructor(searchVideosData) {
        this.searchVideosData = searchVideosData;
    }
    async execute({ videoName, accessToken, }) {
        const response = await this.searchVideosData.getVideos({
            videoName,
            accessToken,
        });
        return response;
    }
}
exports.SearchVideosUseCase = SearchVideosUseCase;
//# sourceMappingURL=SerachVideosUseCase.js.map