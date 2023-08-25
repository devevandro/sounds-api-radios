import { SearchVideosEntity } from '../../../../entities/youtube-api/SearchVideosEntity';
export type SearchVideosRequest = {
    videoName: string;
    accessToken: string;
};
export interface ISearchVideosData {
    getVideos({ videoName, accessToken, }: SearchVideosRequest): Promise<SearchVideosEntity>;
}
