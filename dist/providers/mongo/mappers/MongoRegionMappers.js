"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRegionMappers = void 0;
class MongoRegionMappers {
    static toEntity(region) {
        return {
            id: region.id,
            name: region.name,
        };
    }
}
exports.MongoRegionMappers = MongoRegionMappers;
//# sourceMappingURL=MongoRegionMappers.js.map