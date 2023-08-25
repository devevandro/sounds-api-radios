"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatesSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetStatesSpy {
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
        ];
    }
    async getStates() {
        return this.result;
    }
}
exports.GetStatesSpy = GetStatesSpy;
//# sourceMappingURL=GetStatesSpy.js.map