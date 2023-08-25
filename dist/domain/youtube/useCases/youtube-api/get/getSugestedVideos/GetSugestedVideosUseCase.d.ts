import IUseCase from '../../../../../../core/IUseCase';
import { IGetSugestedVideosData } from '../../../../data/youtube-api/get/getSugestedVideos/IGetSugestedVideosData';
import { VideosEntity } from '../../../../entities/youtube-api/VideosEntity';
type ResponseDTO = VideosEntity;
export type RequestDTO = {
    tags: string[];
    accessToken: string;
};
export declare class GetSugestedVideosUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getSugestedVideos;
    constructor(getSugestedVideos: IGetSugestedVideosData);
    execute({ tags, accessToken }: RequestDTO): Promise<ResponseDTO>;
}
export {};
