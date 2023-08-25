import { IGetSugestedVideosData, GetSugestedVideoRequestDTO, GetSugestedVideoRespondeDTO } from '../../../../../../../domain/youtube/data/youtube-api/get/getSugestedVideos/IGetSugestedVideosData';
export declare class GetSugestedVideosSpy implements IGetSugestedVideosData {
    params: GetSugestedVideoRequestDTO;
    result: GetSugestedVideoRespondeDTO;
    getSugestedVideos({ channelId, accessToken, }: GetSugestedVideoRequestDTO): Promise<GetSugestedVideoRespondeDTO>;
}
