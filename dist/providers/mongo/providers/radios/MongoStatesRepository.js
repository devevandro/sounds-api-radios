"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoStatesRepository = void 0;
const MongoStateMappers_1 = require("../../mappers/radios/MongoStateMappers");
const StateModel_1 = require("../../models/radios/StateModel");
class MongoStatesRepository {
    async getStates() {
        const states = await StateModel_1.StateModel.find();
        return states.map(state => MongoStateMappers_1.MongoStateMappers.toEntity(state));
    }
}
exports.MongoStatesRepository = MongoStatesRepository;
//# sourceMappingURL=MongoStatesRepository.js.map