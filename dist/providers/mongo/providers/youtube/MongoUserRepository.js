"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
const MongoUserMappers_1 = require("../../mappers/youtube/MongoUserMappers");
const UserModel_1 = require("../../models/youtube/UserModel");
class MongoUserRepository {
    async getUser({ email }) {
        const user = await UserModel_1.UserModel.find({ email });
        return MongoUserMappers_1.MongoUserMappers.toEntity(user[0]);
    }
    async createUser({ channelId, displayName, email, photoUrl, }) {
        const user = await this.getUser({ email });
        if (user) {
            throw new Error('user is already account');
        }
        const response = await UserModel_1.UserModel.create({
            channelId,
            displayName,
            email,
            photoUrl,
        });
        if (!response) {
            throw new Error('error to create a user!');
        }
        return response;
    }
}
exports.MongoUserRepository = MongoUserRepository;
//# sourceMappingURL=MongoUserRepository.js.map