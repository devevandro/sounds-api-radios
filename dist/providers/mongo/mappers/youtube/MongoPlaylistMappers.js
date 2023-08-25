"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoPlaylistMappers = void 0;
class MongoPlaylistMappers {
    static toEntity(playlist) {
        return {
            id: playlist === null || playlist === void 0 ? void 0 : playlist.id,
            playlistId: playlist === null || playlist === void 0 ? void 0 : playlist.playlistId,
            playlistName: playlist === null || playlist === void 0 ? void 0 : playlist.playlistName,
            user: playlist === null || playlist === void 0 ? void 0 : playlist.user,
        };
    }
}
exports.MongoPlaylistMappers = MongoPlaylistMappers;
//# sourceMappingURL=MongoPlaylistMappers.js.map