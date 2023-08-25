"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlaylistSpy = void 0;
const faker_1 = require("@faker-js/faker");
class CreatePlaylistSpy {
    constructor() {
        this.result = {
            playlistCreated: {
                etag: faker_1.faker.datatype.string(),
                id: faker_1.faker.datatype.string(),
                kind: faker_1.faker.datatype.string(),
                snippet: {
                    channelId: faker_1.faker.datatype.string(),
                    channelTitle: faker_1.faker.datatype.string(),
                    description: faker_1.faker.datatype.string(),
                    publishedAt: faker_1.faker.datatype.string(),
                    title: faker_1.faker.datatype.string(),
                    localized: {
                        title: faker_1.faker.datatype.string(),
                        description: faker_1.faker.datatype.string(),
                    },
                    thumbnails: {
                        default: {
                            url: faker_1.faker.datatype.string(),
                            width: faker_1.faker.datatype.number(),
                            height: faker_1.faker.datatype.number(),
                        },
                        medium: {
                            url: faker_1.faker.datatype.string(),
                            width: faker_1.faker.datatype.number(),
                            height: faker_1.faker.datatype.number(),
                        },
                        high: {
                            url: faker_1.faker.datatype.string(),
                            width: faker_1.faker.datatype.number(),
                            height: faker_1.faker.datatype.number(),
                        },
                    },
                },
            },
        };
    }
    async createPlaylist({ channelId, description, title, accessToken, }) {
        this.params = {
            accessToken,
            channelId,
            description,
            title,
        };
        return this.result;
    }
}
exports.CreatePlaylistSpy = CreatePlaylistSpy;
//# sourceMappingURL=PostCreatePlaylistSpy.js.map