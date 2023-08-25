"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserChannelSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetUserChannelSpy {
    constructor() {
        this.result = {
            userChannel: {
                etag: faker_1.faker.datatype.string(),
                items: [
                    {
                        etag: faker_1.faker.datatype.string(),
                        id: {
                            channelId: faker_1.faker.datatype.string(),
                            kind: faker_1.faker.datatype.string(),
                        },
                        kind: faker_1.faker.datatype.string(),
                        snippet: {
                            channelId: faker_1.faker.datatype.string(),
                            channelTitle: faker_1.faker.datatype.string(),
                            description: faker_1.faker.datatype.string(),
                            liveBroadcastContent: faker_1.faker.datatype.string(),
                            publishedAt: faker_1.faker.datatype.string(),
                            publishTime: faker_1.faker.datatype.string(),
                            thumbnails: {
                                default: {
                                    url: faker_1.faker.datatype.string(),
                                },
                                high: {
                                    url: faker_1.faker.datatype.string(),
                                },
                                medium: {
                                    url: faker_1.faker.datatype.string(),
                                },
                            },
                            title: faker_1.faker.datatype.string(),
                        },
                    },
                ],
                kind: faker_1.faker.datatype.string(),
                nextPageToken: faker_1.faker.datatype.string(),
                pageInfo: {
                    resultsPerPage: faker_1.faker.datatype.number(),
                    totalResults: faker_1.faker.datatype.number(),
                },
                regionCode: faker_1.faker.datatype.string(),
            },
        };
    }
    async getUserChannel({ userName, accessToken, }) {
        this.params = { userName, accessToken };
        return this.result;
    }
}
exports.GetUserChannelSpy = GetUserChannelSpy;
//# sourceMappingURL=getUserChannelSpy.js.map