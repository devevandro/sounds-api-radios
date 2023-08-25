"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoPlaylistRepository = void 0;
const mongoose_1 = require("mongoose");
const PlaylistModel_1 = require("../../models/youtube/PlaylistModel");
const MongoPlaylistMappers_1 = require("../../mappers/youtube/MongoPlaylistMappers");
class MongoPlaylistRepository {
    async getPlaylist({ userId, playlistId, }) {
        const userMongoId = new mongoose_1.mongo.ObjectId(userId);
        const playlist = await PlaylistModel_1.PlaylistModel.find({
            user: userMongoId,
            playlistId,
        });
        return MongoPlaylistMappers_1.MongoPlaylistMappers.toEntity(playlist[0]);
    }
    async getPlaylists({ userId, }) {
        const userMongoId = new mongoose_1.mongo.ObjectId(userId);
        const playlists = await PlaylistModel_1.PlaylistModel.find({
            user: userMongoId,
        });
        return playlists.map(playlist => MongoPlaylistMappers_1.MongoPlaylistMappers.toEntity(playlist));
    }
    async createPlaylist({ userId, playlistId, playlistName, }) {
        const response = await PlaylistModel_1.PlaylistModel.create({
            user: userId,
            playlistId,
            playlistName,
        });
        return response;
    }
    async deletePlaylistShared({ userId, playlistId, }) {
        const userMongoId = new mongoose_1.mongo.ObjectId(userId);
        const response = await PlaylistModel_1.PlaylistModel.deleteOne({
            user: userMongoId,
            playlistId,
        });
        const { deletedCount } = response;
        console.log(deletedCount);
        return deletedCount;
    }
}
exports.MongoPlaylistRepository = MongoPlaylistRepository;
//# sourceMappingURL=MongoPlaylistRepository.js.map