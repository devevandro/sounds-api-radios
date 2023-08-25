"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlaylistSpy = void 0;
class DeletePlaylistSpy {
    async deletePlaylist({ playlistId, accessToken, }) {
        this.params = {
            accessToken,
            playlistId,
        };
        return true;
    }
}
exports.DeletePlaylistSpy = DeletePlaylistSpy;
//# sourceMappingURL=DeletePlaylistSpy.js.map