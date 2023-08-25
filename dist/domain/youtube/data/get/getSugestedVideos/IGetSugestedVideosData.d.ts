import { SugestedVideosEntity } from '../../../entities/SugestedVideosEntity';
export type GetSugestedVideoRespondeDTO = {
    videos: SugestedVideosEntity;
};
export type GetSugestedVideoRequestDTO = {
    channelId: string;
    accessToken: string;
};
export interface IGetSugestedVideosData {
    getSugestedVideos({ channelId, accessToken, }: GetSugestedVideoRequestDTO): Promise<GetSugestedVideoRespondeDTO>;
}
