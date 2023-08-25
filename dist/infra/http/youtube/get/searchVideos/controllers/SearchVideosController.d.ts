import { SearchVideosFactory } from '../../../../../factories/youtube/get/searchVideos/SearchVideosFactory';
export declare class SearchVideosController {
    private readonly searchPlaylistFactory;
    constructor(searchPlaylistFactory: SearchVideosFactory);
    getVideos(videoName: string, accessToken: string): Promise<import("../../../../../../domain/youtube/entities/SearchVideosEntity").SearchVideosEntity>;
}
