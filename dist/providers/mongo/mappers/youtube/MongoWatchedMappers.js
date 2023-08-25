"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoWatchedMappers = void 0;
class MongoWatchedMappers {
    static toEntity(object) {
        return {
            id: object.id,
            user: object.user,
            title: object.title,
            videoId: object.videoId,
            thumbnailUrl: object.thumbnailUrl,
        };
    }
}
exports.MongoWatchedMappers = MongoWatchedMappers;
//# sourceMappingURL=MongoWatchedMappers.js.map