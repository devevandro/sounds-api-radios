import { VideoDetailEntity } from '../../../entities/VideoDetailEntity';
export type GetVideoDetailsResponseDTO = {
    details: VideoDetailEntity;
};
export type GetVideoDetailsRequestDTO = {
    videoId: string;
    accessToken: string;
};
export interface IGetVideoDetailData {
    getVideoDetail({ videoId, accessToken, }: GetVideoDetailsRequestDTO): Promise<GetVideoDetailsResponseDTO>;
}
