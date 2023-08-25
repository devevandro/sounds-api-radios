"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRegionRepository = void 0;
const mongoose_1 = require("mongoose");
const MongoRegionMappers_1 = require("../../mappers/radios/MongoRegionMappers");
const RegionModel_1 = require("../../models/radios/RegionModel");
class MongoRegionRepository {
    async getRegionById({ regionId, }) {
        const regionMongoId = new mongoose_1.mongo.ObjectId(regionId);
        const region = await RegionModel_1.RegionModel.find({ _id: regionMongoId });
        return MongoRegionMappers_1.MongoRegionMappers.toEntity(region[0]);
    }
}
exports.MongoRegionRepository = MongoRegionRepository;
//# sourceMappingURL=MongoRegionRepository.js.map