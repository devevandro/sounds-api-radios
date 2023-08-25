"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRegionByIdSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetRegionByIdSpy {
    constructor() {
        this.result = {
            id: faker_1.faker.database.mongodbObjectId(),
            name: faker_1.faker.datatype.string(),
        };
    }
    async getRegionById(params) {
        this.params = params;
        return this.result;
    }
}
exports.GetRegionByIdSpy = GetRegionByIdSpy;
//# sourceMappingURL=GetRegionByIdSpy.js.map