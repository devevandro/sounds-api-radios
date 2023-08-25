"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeProvider = void 0;
const ENVIRONMENTS_1 = require("../../constants/ENVIRONMENTS");
const YoutubeBaseApi_1 = require("./YoutubeBaseApi");
const CONSTANTS_1 = require("../../constants/CONSTANTS");
class YoutubeProvider extends YoutubeBaseApi_1.YoutubeBaseApi {
    async getPlaylists({ channelId, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const { data } = await this.api.get(`/playlists?part=id%2Csnippet&channelId=${channelId}&key=${apiKey}&maxResults=50`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async getPlaylist({ playlistId, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const { data } = await this.api.get(`/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=50`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async getVideos({ videoName, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const { CATEGORY_ID_MUSIC } = CONSTANTS_1.CONSTANTS;
        const { data } = await this.api.get(`/search?part=snippet&q=${videoName}&type=video&key=${apiKey}&maxResults=50&videoCategoryId=${CATEGORY_ID_MUSIC}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async getSugestedVideos({ tags, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const searchTerms = tags.join('+');
        const { data } = await this.api.get(`/search?part=snippet&q=${searchTerms}&maxResults=18&key=${apiKey}`);
        return data;
    }
    async getVideoDetail({ videoId, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const { data } = await this.api.get(`/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async relatedVideos({ videoId, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const { data } = await this.api.get(`/search?part=snippet&type=video&relatedToVideoId=${videoId}&key=${apiKey}&maxResults=12`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async getUserChannel({ userName, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const { data } = await this.api.get(`/search?part=id,snippet&maxResults=1&type=channel&q=${userName}&key=${apiKey}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async createPlaylist({ channelId, description, title, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const body = {
            snippet: {
                title,
                description,
            },
            channelId,
        };
        const { data } = await this.api.post(`/playlists?part=snippet`, body, {
            params: { key: apiKey },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async addVideoPlaylist({ videoId, playlistId, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const body = {
            snippet: {
                playlistId,
                resourceId: {
                    kind: 'youtube#video',
                    videoId,
                },
            },
        };
        const { data } = await this.api.post(`/playlistItems?part=snippet`, body, {
            params: { key: apiKey },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async deletePlaylist({ playlistId, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const { data } = await this.api.delete(`/playlists?id=${playlistId}&key=${apiKey}`, {
            params: { key: apiKey },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async deleteVideoPlaylist({ itemId, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const { data } = await this.api.delete(`playlistItems?id=${itemId}&key=${apiKey}`, {
            params: { key: apiKey },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
    async updatePlaylist({ newStatus, playlistId, title, accessToken, }) {
        const { YOUTUBE_API_KEY: apiKey } = ENVIRONMENTS_1.ENVIRONMENTS;
        const body = {
            id: playlistId,
            playlistId,
            snippet: {
                title,
            },
            status: {
                privacyStatus: newStatus,
            },
        };
        const { data } = await this.api.put(`playlists?part=status&part=snippet&key=${apiKey}`, body, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return data;
    }
}
exports.YoutubeProvider = YoutubeProvider;
//# sourceMappingURL=YoutubeProvider.js.map