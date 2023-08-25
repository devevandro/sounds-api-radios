"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVideoPlaylistUseCase = void 0;
class AddVideoPlaylistUseCase {
    constructor(addVideoPlaylist, getPlaylist) {
        this.addVideoPlaylist = addVideoPlaylist;
        this.getPlaylist = getPlaylist;
    }
    async execute({ playlistId, videoId, accessToken, }) {
        const response = await this.addVideoPlaylist.addVideoPlaylist({
            accessToken,
            videoId,
            playlistId,
        });
        return response;
    }
}
exports.AddVideoPlaylistUseCase = AddVideoPlaylistUseCase;
//# sourceMappingURL=AddVideoPlaylistUseCase.js.map