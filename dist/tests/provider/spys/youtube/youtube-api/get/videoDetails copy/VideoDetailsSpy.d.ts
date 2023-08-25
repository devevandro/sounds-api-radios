import { IGetVideoDetailData, GetVideoDetailsRequestDTO, GetVideoDetailsResponseDTO } from '../../../../../../../domain/youtube/data/youtube-api/get/getVideoDetail/IGetVideoDetailData';
export declare class VideoDetailsSpy implements IGetVideoDetailData {
    params: GetVideoDetailsRequestDTO;
    result: GetVideoDetailsResponseDTO;
    getVideoDetail({ videoId, accessToken, }: GetVideoDetailsRequestDTO): Promise<GetVideoDetailsResponseDTO>;
}
