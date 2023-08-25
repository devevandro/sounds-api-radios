"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaylistsSharedUseCase = void 0;
class GetPlaylistsSharedUseCase {
    constructor(getPlaylists) {
        this.getPlaylists = getPlaylists;
    }
    async execute({ userId }) {
        const playlists = await this.getPlaylists.getPlaylists({
            userId,
        });
        if (!playlists) {
            return null;
        }
        return playlists;
    }
}
exports.GetPlaylistsSharedUseCase = GetPlaylistsSharedUseCase;
//# sourceMappingURL=GetPlaylistsSharedUseCase.js.map