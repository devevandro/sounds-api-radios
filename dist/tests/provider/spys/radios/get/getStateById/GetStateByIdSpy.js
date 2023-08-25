"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStateByIdSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetStateByIdSpy {
    constructor() {
        this.result = {
            id: faker_1.faker.database.mongodbObjectId(),
            name: faker_1.faker.datatype.string(),
        };
    }
    async getStateById(params) {
        this.params = params;
        return this.result;
    }
}
exports.GetStateByIdSpy = GetStateByIdSpy;
//# sourceMappingURL=GetStateByIdSpy.js.map