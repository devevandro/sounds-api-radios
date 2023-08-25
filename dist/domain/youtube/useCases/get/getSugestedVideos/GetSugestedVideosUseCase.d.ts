import IUseCase from '../../../../../core/IUseCase';
import { IGetSugestedVideosData } from '../../../data/get/getSugestedVideos/IGetSugestedVideosData';
import { SugestedVideosEntity } from '../../../entities/SugestedVideosEntity';
type ResponseDTO = {
    videos: SugestedVideosEntity;
};
export type RequestDTO = {
    channelId: string;
    accessToken: string;
};
export declare class GetSugestedVideosUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getSugestedVideos;
    constructor(getSugestedVideos: IGetSugestedVideosData);
    execute({ channelId, accessToken }: RequestDTO): Promise<ResponseDTO>;
}
export {};
