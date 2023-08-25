"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserMappers = void 0;
class MongoUserMappers {
    static toEntity(user) {
        return {
            id: user === null || user === void 0 ? void 0 : user.id,
            displayName: user === null || user === void 0 ? void 0 : user.displayName,
            channelId: user === null || user === void 0 ? void 0 : user.channelId,
            email: user === null || user === void 0 ? void 0 : user.email,
            photoUrl: user === null || user === void 0 ? void 0 : user.photoUrl,
        };
    }
}
exports.MongoUserMappers = MongoUserMappers;
//# sourceMappingURL=MongoUserMappers.js.map