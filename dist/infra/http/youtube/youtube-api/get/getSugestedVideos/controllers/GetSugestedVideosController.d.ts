import { GetSugestedVideosFactory } from '../../../../../../factories/youtube/youtube-api/get/getSugestedVideos/GetSugestedVideosFactory';
export declare class GetSugestedVideosController {
    private readonly sugestedVideosFactory;
    constructor(sugestedVideosFactory: GetSugestedVideosFactory);
    getPlaylist(tags: string[], accessToken: string): Promise<import("../../../../../../../domain/youtube/entities/youtube-api/VideosEntity").VideosEntity>;
}
