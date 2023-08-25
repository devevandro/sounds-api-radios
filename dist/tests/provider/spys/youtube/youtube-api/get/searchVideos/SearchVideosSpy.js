"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchVideosSpy = void 0;
const faker_1 = require("@faker-js/faker");
class SearchVideosSpy {
    constructor() {
        this.result = {
            kind: faker_1.faker.datatype.string(),
            etag: faker_1.faker.datatype.string(),
            nextPageToken: faker_1.faker.datatype.string(),
            regionCode: faker_1.faker.datatype.string(),
            pageInfo: {
                totalResults: 918417,
                resultsPerPage: 10,
            },
            items: [
                {
                    kind: faker_1.faker.datatype.string(),
                    etag: faker_1.faker.datatype.string(),
                    id: {
                        kind: faker_1.faker.datatype.string(),
                        videoId: faker_1.faker.datatype.string(),
                    },
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
                        liveBroadcastContent: faker_1.faker.datatype.string(),
                        publishTime: faker_1.faker.datatype.string(),
                    },
                },
                {
                    kind: faker_1.faker.datatype.string(),
                    etag: faker_1.faker.datatype.string(),
                    id: {
                        kind: faker_1.faker.datatype.string(),
                        videoId: faker_1.faker.datatype.string(),
                    },
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
                        liveBroadcastContent: faker_1.faker.datatype.string(),
                        publishTime: faker_1.faker.datatype.string(),
                    },
                },
                {
                    kind: faker_1.faker.datatype.string(),
                    etag: faker_1.faker.datatype.string(),
                    id: {
                        kind: faker_1.faker.datatype.string(),
                        videoId: faker_1.faker.datatype.string(),
                    },
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
                        liveBroadcastContent: faker_1.faker.datatype.string(),
                        publishTime: faker_1.faker.datatype.string(),
                    },
                },
            ],
        };
    }
    async getVideos({ videoName, accessToken, }) {
        this.params = { videoName, accessToken };
        return this.result;
    }
}
exports.SearchVideosSpy = SearchVideosSpy;
//# sourceMappingURL=SearchVideosSpy.js.map