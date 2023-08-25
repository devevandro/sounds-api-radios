"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlaylistStatusUseCase = void 0;
class UpdatePlaylistStatusUseCase {
    constructor(updatePlaylistData) {
        this.updatePlaylistData = updatePlaylistData;
    }
    async execute(params) {
        const updated = await this.updatePlaylistData.updatePlaylist(params);
        return updated;
    }
}
exports.UpdatePlaylistStatusUseCase = UpdatePlaylistStatusUseCase;
//# sourceMappingURL=UpdatePlaylistStatusUseCase.js.map