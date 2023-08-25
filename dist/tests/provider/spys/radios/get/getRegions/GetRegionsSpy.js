"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRegionsSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetRegionsSpy {
    constructor() {
        this.result = [
            {
                id: faker_1.faker.database.mongodbObjectId(),
                name: faker_1.faker.datatype.string(),
            },
            {
                id: faker_1.faker.database.mongodbObjectId(),
                name: faker_1.faker.datatype.string(),
            },
            {
                id: faker_1.faker.database.mongodbObjectId(),
                name: faker_1.faker.datatype.string(),
            },
        ];
    }
    async getRegions() {
        return this.result;
    }
}
exports.GetRegionsSpy = GetRegionsSpy;
//# sourceMappingURL=GetRegionsSpy.js.map