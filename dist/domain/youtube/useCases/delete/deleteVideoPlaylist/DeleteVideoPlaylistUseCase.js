"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideoPlaylistUseCase = void 0;
class DeleteVideoPlaylistUseCase {
    constructor(deleteVideoPlaylist) {
        this.deleteVideoPlaylist = deleteVideoPlaylist;
    }
    async execute({ itemId, accessToken }) {
        const videoDeleted = await this.deleteVideoPlaylist.deleteVideoPlaylist({
            itemId,
            accessToken,
        });
        return videoDeleted;
    }
}
exports.DeleteVideoPlaylistUseCase = DeleteVideoPlaylistUseCase;
//# sourceMappingURL=DeleteVideoPlaylistUseCase.js.map