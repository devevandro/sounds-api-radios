"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVideoPlaylistSpy = void 0;
const faker_1 = require("@faker-js/faker");
class AddVideoPlaylistSpy {
    constructor() {
        this.result = {
            video: {
                etag: faker_1.faker.datatype.string(),
                id: faker_1.faker.datatype.string(),
                kind: faker_1.faker.datatype.string(),
                snippet: {
                    channelId: faker_1.faker.datatype.string(),
                    channelTitle: faker_1.faker.datatype.string(),
                    description: faker_1.faker.datatype.string(),
                    playlistId: faker_1.faker.datatype.string(),
                    position: faker_1.faker.datatype.number(),
                    publishedAt: faker_1.faker.datatype.string(),
                    title: faker_1.faker.datatype.string(),
                    videoOwnerChannelId: faker_1.faker.datatype.string(),
                    videoOwnerChannelTitle: faker_1.faker.datatype.string(),
                    thumbnails: {
                        default: {
                            width: faker_1.faker.datatype.number(),
                            height: faker_1.faker.datatype.number(),
                            url: faker_1.faker.datatype.string(),
                        },
                        high: {
                            width: faker_1.faker.datatype.number(),
                            height: faker_1.faker.datatype.number(),
                            url: faker_1.faker.datatype.string(),
                        },
                        maxres: {
                            width: faker_1.faker.datatype.number(),
                            height: faker_1.faker.datatype.number(),
                            url: faker_1.faker.datatype.string(),
                        },
                        medium: {
                            width: faker_1.faker.datatype.number(),
                            height: faker_1.faker.datatype.number(),
                            url: faker_1.faker.datatype.string(),
                        },
                        standard: {
                            width: faker_1.faker.datatype.number(),
                            height: faker_1.faker.datatype.number(),
                            url: faker_1.faker.datatype.string(),
                        },
                    },
                    resourceId: {
                        kind: faker_1.faker.datatype.string(),
                        videoId: faker_1.faker.datatype.string(),
                    },
                },
            },
        };
    }
    async addVideoPlaylist({ playlistId, videoId, accessToken, }) {
        this.params = {
            accessToken,
            videoId,
            playlistId,
        };
        return this.result;
    }
}
exports.AddVideoPlaylistSpy = AddVideoPlaylistSpy;
//# sourceMappingURL=AddVideoPlaylistSpy.js.map