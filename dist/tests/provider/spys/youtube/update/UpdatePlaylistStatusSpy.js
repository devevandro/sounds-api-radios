"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlaylistStatusSpy = void 0;
const faker_1 = require("@faker-js/faker");
class UpdatePlaylistStatusSpy {
    constructor() {
        this.result = {
            kind: faker_1.faker.datatype.string(),
            etag: faker_1.faker.datatype.string(),
            nextPageToken: faker_1.faker.datatype.string(),
            prevPageToken: faker_1.faker.datatype.string(),
            items: [
                {
                    kind: faker_1.faker.datatype.string(),
                    etag: faker_1.faker.datatype.string(),
                    id: faker_1.faker.datatype.string(),
                    snippet: {
                        publishedAt: faker_1.faker.datatype.string(),
                        channelId: faker_1.faker.datatype.string(),
                        title: faker_1.faker.datatype.string(),
                        description: faker_1.faker.datatype.string(),
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
                        channelTitle: faker_1.faker.datatype.string(),
                        playlistId: faker_1.faker.datatype.string(),
                        position: faker_1.faker.datatype.number(),
                        resourceId: {
                            kind: faker_1.faker.datatype.string(),
                            videoId: faker_1.faker.datatype.string(),
                        },
                        videoOwnerChannelTitle: faker_1.faker.datatype.string(),
                        videoOwnerChannelId: faker_1.faker.datatype.string(),
                    },
                },
                {
                    kind: faker_1.faker.datatype.string(),
                    etag: faker_1.faker.datatype.string(),
                    id: faker_1.faker.datatype.string(),
                    snippet: {
                        publishedAt: faker_1.faker.datatype.string(),
                        channelId: faker_1.faker.datatype.string(),
                        title: faker_1.faker.datatype.string(),
                        description: faker_1.faker.datatype.string(),
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
                        channelTitle: faker_1.faker.datatype.string(),
                        playlistId: faker_1.faker.datatype.string(),
                        position: faker_1.faker.datatype.number(),
                        resourceId: {
                            kind: faker_1.faker.datatype.string(),
                            videoId: faker_1.faker.datatype.string(),
                        },
                        videoOwnerChannelTitle: faker_1.faker.datatype.string(),
                        videoOwnerChannelId: faker_1.faker.datatype.string(),
                    },
                },
            ],
            pageInfo: {
                totalResults: faker_1.faker.datatype.number(),
                resultsPerPage: faker_1.faker.datatype.number(),
            },
        };
    }
    async updatePlaylist(params) {
        this.params = params;
        return this.result;
    }
}
exports.UpdatePlaylistStatusSpy = UpdatePlaylistStatusSpy;
//# sourceMappingURL=UpdatePlaylistStatusSpy.js.map