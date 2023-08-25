"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeBaseApi = void 0;
const axios_1 = require("axios");
const ENVIRONMENTS_1 = require("../../constants/ENVIRONMENTS");
class YoutubeBaseApi {
    constructor() {
        const { YOUTUBE_API_URL } = ENVIRONMENTS_1.ENVIRONMENTS;
        this.api = axios_1.default.create({
            baseURL: YOUTUBE_API_URL,
        });
    }
}
exports.YoutubeBaseApi = YoutubeBaseApi;
//# sourceMappingURL=YoutubeBaseApi.js.map