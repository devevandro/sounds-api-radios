import { ISearchVideosData, SearchVideosRequest } from '../../../../../../../domain/youtube/data/youtube-api/get/searchVideos/ISearchVideosData';
import { SearchVideosEntity } from '../../../../../../../domain/youtube/entities/youtube-api/SearchVideosEntity';
export declare class SearchVideosSpy implements ISearchVideosData {
    params: SearchVideosRequest;
    result: SearchVideosEntity;
    getVideos({ videoName, accessToken, }: SearchVideosRequest): Promise<SearchVideosEntity>;
}
