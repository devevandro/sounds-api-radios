"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedVideosUseCase = void 0;
class RelatedVideosUseCase {
    constructor(relatedVideosData) {
        this.relatedVideosData = relatedVideosData;
    }
    async execute(params) {
        const relatedVideos = await this.relatedVideosData.relatedVideos(params);
        return relatedVideos;
    }
}
exports.RelatedVideosUseCase = RelatedVideosUseCase;
//# sourceMappingURL=RelatedVideosUseCase.js.map