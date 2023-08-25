"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreatePlaylistUseCase = void 0;
class PostCreatePlaylistUseCase {
    constructor(createPlaylist) {
        this.createPlaylist = createPlaylist;
    }
    async execute({ channelId, description, title, accessToken, }) {
        const playlistCreated = await this.createPlaylist.createPlaylist({
            channelId,
            description,
            title,
            accessToken,
        });
        return playlistCreated;
    }
}
exports.PostCreatePlaylistUseCase = PostCreatePlaylistUseCase;
//# sourceMappingURL=PostCreatePlaylistUseCase.js.map