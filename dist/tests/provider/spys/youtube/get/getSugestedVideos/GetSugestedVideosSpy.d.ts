import { GetSugestedVideoRequestDTO, GetSugestedVideoRespondeDTO, IGetSugestedVideosData } from '../../../../../../domain/youtube/data/get/getSugestedVideos/IGetSugestedVideosData';
export declare class GetSugestedVideosSpy implements IGetSugestedVideosData {
    params: GetSugestedVideoRequestDTO;
    result: GetSugestedVideoRespondeDTO;
    getSugestedVideos({ channelId, accessToken, }: GetSugestedVideoRequestDTO): Promise<GetSugestedVideoRespondeDTO>;
}
