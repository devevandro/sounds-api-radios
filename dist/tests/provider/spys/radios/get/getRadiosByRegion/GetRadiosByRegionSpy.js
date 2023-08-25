"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRadiosByRegionSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetRadiosByRegionSpy {
    constructor() {
        this.result = [
            {
                city: faker_1.faker.datatype.string(),
                id: faker_1.faker.datatype.string(),
                img: faker_1.faker.datatype.string(),
                isFavorite: faker_1.faker.datatype.boolean(),
                name: faker_1.faker.datatype.string(),
                region: faker_1.faker.datatype.string(),
                state: faker_1.faker.datatype.string(),
                url: faker_1.faker.datatype.string(),
            },
        ];
    }
    async getRadiosByRegion(params) {
        this.params = params;
        return this.result;
    }
}
exports.GetRadiosByRegionSpy = GetRadiosByRegionSpy;
//# sourceMappingURL=GetRadiosByRegionSpy.js.map