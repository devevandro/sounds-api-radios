import { RelatedVideosFactory } from '../../../../../../factories/youtube/youtube-api/get/relatedVideos/RelatedVideosFactory';
export declare class RelatedVideosController {
    private readonly relatedVideosFactory;
    constructor(relatedVideosFactory: RelatedVideosFactory);
    getPlaylist(videoId: string, accessToken: string): Promise<import("../../../../../../../domain/youtube/entities/youtube-api/VideosEntity").VideosEntity>;
}
