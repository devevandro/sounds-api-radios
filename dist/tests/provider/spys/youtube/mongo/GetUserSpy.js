"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetUserSpy {
    constructor() {
        this.result = {
            displayName: faker_1.faker.name.fullName(),
            email: faker_1.faker.internet.email(),
            photoUrl: faker_1.faker.internet.url(),
            channelId: faker_1.faker.datatype.string(),
            id: faker_1.faker.datatype.string(),
        };
    }
    async getUser({ email }) {
        this.params = { email };
        return this.result;
    }
}
exports.GetUserSpy = GetUserSpy;
//# sourceMappingURL=GetUserSpy.js.map