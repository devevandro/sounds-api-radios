import { GetSugestedVideosFactory } from '../../../../../factories/youtube/get/getSugestedVideos/GetSugestedVideosFactory';
export declare class GetSugestedVideosController {
    private readonly sugestedVideosFactory;
    constructor(sugestedVideosFactory: GetSugestedVideosFactory);
    getPlaylist(channelId: string, accessToken: string): Promise<{
        videos: import("../../../../../../domain/youtube/entities/SugestedVideosEntity").SugestedVideosEntity;
    }>;
}
