import { VideosEntity } from '../../../../entities/youtube-api/VideosEntity';
export type GetSugestedVideoRespondeDTO = VideosEntity;
export type GetSugestedVideoRequestDTO = {
    tags: string[];
    accessToken: string;
};
export interface IGetSugestedVideosData {
    getSugestedVideos({ tags, accessToken, }: GetSugestedVideoRequestDTO): Promise<GetSugestedVideoRespondeDTO>;
}
