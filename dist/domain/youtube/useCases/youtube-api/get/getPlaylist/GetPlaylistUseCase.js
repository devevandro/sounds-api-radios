"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaylistUseCase = void 0;
class GetPlaylistUseCase {
    constructor(getPlaylist) {
        this.getPlaylist = getPlaylist;
    }
    async execute({ playlistId, accessToken, }) {
        const playlist = await this.getPlaylist.getPlaylist({
            playlistId,
            accessToken,
        });
        return playlist;
    }
}
exports.GetPlaylistUseCase = GetPlaylistUseCase;
//# sourceMappingURL=GetPlaylistUseCase.js.map