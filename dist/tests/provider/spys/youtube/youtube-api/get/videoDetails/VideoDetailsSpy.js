"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoDetailsSpy = void 0;
const faker_1 = require("@faker-js/faker");
class VideoDetailsSpy {
    constructor() {
        this.result = {
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
                    standard: {
                        url: faker_1.faker.datatype.string(),
                        width: faker_1.faker.datatype.number(),
                        height: faker_1.faker.datatype.number(),
                    },
                    maxres: {
                        url: faker_1.faker.datatype.string(),
                        width: faker_1.faker.datatype.number(),
                        height: faker_1.faker.datatype.number(),
                    },
                },
                channelTitle: faker_1.faker.datatype.string(),
                tags: faker_1.faker.helpers.arrayElements([
                    faker_1.faker.datatype.string(),
                    faker_1.faker.datatype.string(),
                    faker_1.faker.datatype.string(),
                ]),
                categoryId: faker_1.faker.datatype.string(),
                liveBroadcastContent: faker_1.faker.datatype.string(),
                localized: {
                    title: faker_1.faker.datatype.string(),
                    description: faker_1.faker.datatype.string(),
                },
            },
            contentDetails: {
                duration: faker_1.faker.datatype.string(),
                dimension: faker_1.faker.datatype.string(),
                definition: faker_1.faker.datatype.string(),
                caption: faker_1.faker.datatype.string(),
                licensedContent: faker_1.faker.datatype.boolean(),
                projection: faker_1.faker.datatype.string(),
            },
            statistics: {
                viewCount: faker_1.faker.datatype.string(),
                likeCount: faker_1.faker.datatype.string(),
                favoriteCount: faker_1.faker.datatype.string(),
                commentCount: faker_1.faker.datatype.string(),
            },
        };
    }
    async getVideoDetail({ videoId, accessToken, }) {
        this.params = { videoId, accessToken };
        return this.result;
    }
}
exports.VideoDetailsSpy = VideoDetailsSpy;
//# sourceMappingURL=VideoDetailsSpy.js.map