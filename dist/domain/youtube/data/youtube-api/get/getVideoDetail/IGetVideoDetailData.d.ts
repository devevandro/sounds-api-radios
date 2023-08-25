import { VideoDetailEntity } from '../../../../entities/youtube-api/VideoDetailEntity';
export type GetVideoDetailsResponseDTO = VideoDetailEntity;
export type GetVideoDetailsRequestDTO = {
    videoId: string;
    accessToken: string;
};
export interface IGetVideoDetailData {
    getVideoDetail({ videoId, accessToken, }: GetVideoDetailsRequestDTO): Promise<GetVideoDetailsResponseDTO>;
}
