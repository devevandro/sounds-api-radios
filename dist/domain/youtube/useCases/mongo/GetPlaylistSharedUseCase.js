"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaylistSharedUseCase = void 0;
class GetPlaylistSharedUseCase {
    constructor(getPlaylist) {
        this.getPlaylist = getPlaylist;
    }
    async execute({ userId, playlistId, }) {
        const playlists = await this.getPlaylist.getPlaylist({
            userId,
            playlistId,
        });
        if (!playlists) {
            return null;
        }
        return playlists;
    }
}
exports.GetPlaylistSharedUseCase = GetPlaylistSharedUseCase;
//# sourceMappingURL=GetPlaylistSharedUseCase.js.map