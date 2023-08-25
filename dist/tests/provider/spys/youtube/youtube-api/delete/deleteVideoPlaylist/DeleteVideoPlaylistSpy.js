"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideoPlaylistSpy = void 0;
class DeleteVideoPlaylistSpy {
    async deleteVideoPlaylist({ itemId, accessToken, }) {
        this.params = {
            accessToken,
            itemId,
        };
        return true;
    }
}
exports.DeleteVideoPlaylistSpy = DeleteVideoPlaylistSpy;
//# sourceMappingURL=DeleteVideoPlaylistSpy.js.map