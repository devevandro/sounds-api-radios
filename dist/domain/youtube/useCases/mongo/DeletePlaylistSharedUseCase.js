"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlaylistSharedUseCase = void 0;
class DeletePlaylistSharedUseCase {
    constructor(deletePlaylistSharedData) {
        this.deletePlaylistSharedData = deletePlaylistSharedData;
    }
    async execute({ userId, playlistId }) {
        const response = await this.deletePlaylistSharedData.deletePlaylistShared({
            userId,
            playlistId,
        });
        return response;
    }
}
exports.DeletePlaylistSharedUseCase = DeletePlaylistSharedUseCase;
//# sourceMappingURL=DeletePlaylistSharedUseCase.js.map