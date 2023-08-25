"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaylistsSharedSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetPlaylistsSharedSpy {
    constructor() {
        this.result = [
            {
                playlistId: faker_1.faker.datatype.string(),
                playlistName: faker_1.faker.name.fullName(),
                user: faker_1.faker.database.mongodbObjectId(),
            },
            {
                playlistId: faker_1.faker.datatype.string(),
                playlistName: faker_1.faker.name.fullName(),
                user: faker_1.faker.database.mongodbObjectId(),
            },
        ];
    }
    async getPlaylists({ userId }) {
        this.params = { userId };
        return this.result;
    }
}
exports.GetPlaylistsSharedSpy = GetPlaylistsSharedSpy;
//# sourceMappingURL=GetPlaylistsSharedSpy.js.map