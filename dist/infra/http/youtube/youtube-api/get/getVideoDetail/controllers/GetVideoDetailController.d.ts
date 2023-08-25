import { GetVideoDetailFactory } from '../../../../../../factories/youtube/youtube-api/get/getVideoDetail/GetVideoDetailFactory';
export declare class GetVideoDetailController {
    private readonly videoDetailProvider;
    constructor(videoDetailProvider: GetVideoDetailFactory);
    getVideos(videoId: string, accessToken: string): Promise<import("../../../../../../../domain/youtube/entities/youtube-api/VideoDetailEntity").VideoDetailEntity>;
}
