"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaylistsUseCase = void 0;
class GetPlaylistsUseCase {
    constructor(getPlaylists) {
        this.getPlaylists = getPlaylists;
    }
    async execute({ channelId, accessToken }) {
        const playlists = await this.getPlaylists.getPlaylists({
            channelId,
            accessToken,
        });
        return playlists;
    }
}
exports.GetPlaylistsUseCase = GetPlaylistsUseCase;
//# sourceMappingURL=GetPlaylistsUseCase.js.map