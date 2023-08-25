"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRegionsRepository = void 0;
const MongoRegionMappers_1 = require("../../mappers/radios/MongoRegionMappers");
const RegionModel_1 = require("../../models/radios/RegionModel");
class MongoRegionsRepository {
    async getRegions() {
        const regions = await RegionModel_1.RegionModel.find();
        return regions.map(region => MongoRegionMappers_1.MongoRegionMappers.toEntity(region));
    }
}
exports.MongoRegionsRepository = MongoRegionsRepository;
//# sourceMappingURL=MongoRegionsRepository.js.map