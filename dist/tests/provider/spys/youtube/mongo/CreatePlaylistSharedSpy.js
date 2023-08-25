"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlaylistSharedSpy = void 0;
const faker_1 = require("@faker-js/faker");
class CreatePlaylistSharedSpy {
    constructor() {
        this.result = {
            playlistId: faker_1.faker.datatype.string(),
            playlistName: faker_1.faker.datatype.string(),
            user: faker_1.faker.database.mongodbObjectId(),
        };
    }
    async createPlaylist(params) {
        this.params = params;
        return this.result;
    }
}
exports.CreatePlaylistSharedSpy = CreatePlaylistSharedSpy;
//# sourceMappingURL=CreatePlaylistSharedSpy.js.map