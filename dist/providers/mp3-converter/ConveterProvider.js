"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterProvider = void 0;
const fs = require("fs");
const ytdl = require("ytdl-core");
const ENVIRONMENTS_1 = require("../../constants/ENVIRONMENTS");
class ConverterProvider {
    async convertToMP3({ videoId }) {
        const { YOUTUBE_KEY } = ENVIRONMENTS_1.ENVIRONMENTS;
        const videoUrl = `${YOUTUBE_KEY}${videoId}`;
        const info = await ytdl.getInfo(videoId);
        const stream = ytdl(videoUrl, { filter: 'audioonly' });
        const title = info.videoDetails.title;
        const paths = '/Users/gempe/Downloads';
        stream
            .pipe(fs.createWriteStream(`${paths}/${title}.mp3`))
            .on('finish', () => {
            return;
        })
            .on('error', err => {
            throw new Error(err.message);
        });
    }
}
exports.ConverterProvider = ConverterProvider;
//# sourceMappingURL=ConveterProvider.js.map