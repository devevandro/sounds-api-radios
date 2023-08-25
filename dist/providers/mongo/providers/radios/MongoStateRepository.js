"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoStateRepository = void 0;
const mongoose_1 = require("mongoose");
const MongoStateMappers_1 = require("../../mappers/radios/MongoStateMappers");
const StateModel_1 = require("../../models/radios/StateModel");
class MongoStateRepository {
    async getStateById({ stateId, }) {
        const stateMongoId = new mongoose_1.mongo.ObjectId(stateId);
        const state = await StateModel_1.StateModel.find({ _id: stateMongoId });
        return MongoStateMappers_1.MongoStateMappers.toEntity(state[0]);
    }
}
exports.MongoStateRepository = MongoStateRepository;
//# sourceMappingURL=MongoStateRepository.js.map