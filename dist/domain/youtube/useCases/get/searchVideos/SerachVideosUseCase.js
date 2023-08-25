"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchVideosUseCase = void 0;
class SearchVideosUseCase {
    constructor(searchVideos) {
        this.searchVideos = searchVideos;
    }
    async execute({ videoName, accessToken, }) {
        const response = await this.searchVideos.getVideos({
            videoName,
            accessToken,
        });
        return response;
    }
}
exports.SearchVideosUseCase = SearchVideosUseCase;
//# sourceMappingURL=SerachVideosUseCase.js.map