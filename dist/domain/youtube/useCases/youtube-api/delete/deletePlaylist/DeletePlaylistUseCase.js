"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlaylistUseCase = void 0;
class DeletePlaylistUseCase {
    constructor(deletePlaylist) {
        this.deletePlaylist = deletePlaylist;
    }
    async execute({ playlistId, accessToken }) {
        const playlistDeleted = await this.deletePlaylist.deletePlaylist({
            playlistId,
            accessToken,
        });
        return playlistDeleted;
    }
}
exports.DeletePlaylistUseCase = DeletePlaylistUseCase;
//# sourceMappingURL=DeletePlaylistUseCase.js.map