"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlaylistSharedUseCase = void 0;
class CreatePlaylistSharedUseCase {
    constructor(createPlaylistData) {
        this.createPlaylistData = createPlaylistData;
    }
    async execute(params) {
        const response = await this.createPlaylistData.createPlaylist(params);
        if (!response) {
            return null;
        }
        return response;
    }
}
exports.CreatePlaylistSharedUseCase = CreatePlaylistSharedUseCase;
//# sourceMappingURL=CreatePlaylistSharedUseCase.js.map