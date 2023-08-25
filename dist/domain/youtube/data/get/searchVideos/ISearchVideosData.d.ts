import { SearchVideosEntity } from '../../../entities/SearchVideosEntity';
export type SearchVideosRequest = {
    videoName: string;
    accessToken: string;
};
export interface ISearchVideosData {
    getVideos({ videoName, accessToken, }: SearchVideosRequest): Promise<SearchVideosEntity>;
}
