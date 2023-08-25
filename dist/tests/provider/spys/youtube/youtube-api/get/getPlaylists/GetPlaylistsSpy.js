"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaylistsSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetPlaylistsSpy {
    constructor() {
        this.result = {
            playlists: {
                kind: faker_1.faker.datatype.string(),
                etag: faker_1.faker.datatype.string(),
                pageInfo: {
                    resultsPerPage: faker_1.faker.datatype.number(),
                    totalResults: faker_1.faker.datatype.number(),
                },
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
                            localized: {
                                title: faker_1.faker.datatype.string(),
                                description: faker_1.faker.datatype.string(),
                            },
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
                            localized: {
                                title: faker_1.faker.datatype.string(),
                                description: faker_1.faker.datatype.string(),
                            },
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
                            localized: {
                                title: faker_1.faker.datatype.string(),
                                description: faker_1.faker.datatype.string(),
                            },
                        },
                    },
                ],
            },
        };
    }
    async getPlaylists({ channelId, accessToken, }) {
        this.params = { channelId, accessToken };
        return this.result;
    }
}
exports.GetPlaylistsSpy = GetPlaylistsSpy;
//# sourceMappingURL=GetPlaylistsSpy.js.map