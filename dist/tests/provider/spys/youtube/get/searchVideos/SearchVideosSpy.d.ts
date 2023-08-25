import { ISearchVideosData, SearchVideosRequest } from '../../../../../../domain/youtube/data/get/searchVideos/ISearchVideosData';
import { SearchVideosEntity } from '../../../../../../domain/youtube/entities/SearchVideosEntity';
export declare class SearchVideosSpy implements ISearchVideosData {
    params: SearchVideosRequest;
    result: SearchVideosEntity;
    getVideos({ videoName, accessToken, }: SearchVideosRequest): Promise<SearchVideosEntity>;
}
