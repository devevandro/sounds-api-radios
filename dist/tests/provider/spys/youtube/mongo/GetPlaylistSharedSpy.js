"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaylistSharedSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetPlaylistSharedSpy {
    constructor() {
        this.result = {
            playlistId: faker_1.faker.datatype.string(),
            playlistName: faker_1.faker.name.fullName(),
            user: faker_1.faker.database.mongodbObjectId(),
        };
    }
    async getPlaylist({ userId, playlistId, }) {
        this.params = { userId, playlistId };
        return this.result;
    }
}
exports.GetPlaylistSharedSpy = GetPlaylistSharedSpy;
//# sourceMappingURL=GetPlaylistSharedSpy.js.map