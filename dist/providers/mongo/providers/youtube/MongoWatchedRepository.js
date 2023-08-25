"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoWatchedRepository = void 0;
const mongoose_1 = require("mongoose");
const WatchedModel_1 = require("../../models/youtube/WatchedModel");
const MongoWatchedMappers_1 = require("../../mappers/youtube/MongoWatchedMappers");
class MongoWatchedRepository {
    async create({ user, thumbnailUrl, title, videoId, }) {
        const response = await WatchedModel_1.WatchedModel.findOneAndUpdate({
            user,
            videoId,
        }, {
            user,
            thumbnailUrl,
            title,
            videoId,
        }, { upsert: true, returnOriginal: false });
        return MongoWatchedMappers_1.MongoWatchedMappers.toEntity(response);
    }
    async getWatcheds({ userId, }) {
        const userMongoId = new mongoose_1.mongo.ObjectId(userId);
        const watcheds = await WatchedModel_1.WatchedModel.find({
            user: userMongoId,
        }).sort({ updatedAt: -1 });
        return watcheds.map(watched => MongoWatchedMappers_1.MongoWatchedMappers.toEntity(watched));
    }
}
exports.MongoWatchedRepository = MongoWatchedRepository;
//# sourceMappingURL=MongoWatchedRepository.js.map