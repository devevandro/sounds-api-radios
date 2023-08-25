import { GetVideoDetailFactory } from '../../../../../factories/youtube/get/getVideoDetail/GetVideoDetailFactory';
export declare class GetVideoDetailController {
    private readonly videoDetailProvider;
    constructor(videoDetailProvider: GetVideoDetailFactory);
    getVideos(videoId: string, accessToken: string): Promise<{
        details: import("../../../../../../domain/youtube/entities/VideoDetailEntity").VideoDetailEntity;
    }>;
}
