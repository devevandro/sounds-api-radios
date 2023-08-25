"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWatchedsSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetWatchedsSpy {
    constructor() {
        this.result = [
            {
                thumbnailUrl: faker_1.faker.image.imageUrl(),
                title: faker_1.faker.datatype.string(),
                videoId: faker_1.faker.name.fullName(),
                user: faker_1.faker.database.mongodbObjectId(),
            },
            {
                thumbnailUrl: faker_1.faker.image.imageUrl(),
                title: faker_1.faker.datatype.string(),
                videoId: faker_1.faker.name.fullName(),
                user: faker_1.faker.database.mongodbObjectId(),
            },
        ];
    }
    async getWatcheds({ userId }) {
        this.params = { userId };
        return this.result;
    }
}
exports.GetWatchedsSpy = GetWatchedsSpy;
//# sourceMappingURL=GetWatchedsSpy.js.map