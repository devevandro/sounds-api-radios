"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSpy = void 0;
const faker_1 = require("@faker-js/faker");
class CreateUserSpy {
    constructor() {
        this.result = {
            displayName: faker_1.faker.name.fullName(),
            email: faker_1.faker.internet.email(),
            photoUrl: faker_1.faker.image.imageUrl(),
            channelId: faker_1.faker.datatype.string(),
            id: faker_1.faker.datatype.string(),
        };
    }
    async createUser({ channelId, displayName, email, photoUrl, }) {
        this.params = {
            channelId,
            displayName,
            email,
            photoUrl,
        };
        return this.result;
    }
}
exports.CreateUserSpy = CreateUserSpy;
//# sourceMappingURL=CreateUserSpy.js.map