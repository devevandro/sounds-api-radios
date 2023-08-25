"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVideoDetailUseCase = void 0;
class GetVideoDetailUseCase {
    constructor(getVideoDetail) {
        this.getVideoDetail = getVideoDetail;
    }
    async execute({ videoId, accessToken }) {
        const details = await this.getVideoDetail.getVideoDetail({
            videoId,
            accessToken,
        });
        return details;
    }
}
exports.GetVideoDetailUseCase = GetVideoDetailUseCase;
//# sourceMappingURL=GetVideoDetailUseCase.js.map