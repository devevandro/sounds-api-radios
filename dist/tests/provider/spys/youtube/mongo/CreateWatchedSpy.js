"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWatchedSpy = void 0;
const faker_1 = require("@faker-js/faker");
class CreateWatchedSpy {
    constructor() {
        this.result = {
            thumbnailUrl: faker_1.faker.image.imageUrl(),
            title: faker_1.faker.datatype.string(),
            user: faker_1.faker.database.mongodbObjectId(),
            videoId: faker_1.faker.datatype.string(),
        };
    }
    async create(params) {
        this.params = params;
        return this.result;
    }
}
exports.CreateWatchedSpy = CreateWatchedSpy;
//# sourceMappingURL=CreateWatchedSpy.js.map