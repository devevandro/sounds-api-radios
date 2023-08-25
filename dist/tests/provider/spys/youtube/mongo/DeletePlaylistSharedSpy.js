"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlaylistSharedSpy = void 0;
class DeletePlaylistSharedSpy {
    async deletePlaylistShared({ userId, playlistId }) {
        this.params = {
            userId,
            playlistId,
        };
        return 1;
    }
}
exports.DeletePlaylistSharedSpy = DeletePlaylistSharedSpy;
//# sourceMappingURL=DeletePlaylistSharedSpy.js.map