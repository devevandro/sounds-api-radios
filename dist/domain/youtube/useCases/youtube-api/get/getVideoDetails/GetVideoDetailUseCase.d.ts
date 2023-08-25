import IUseCase from '../../../../../../core/IUseCase';
import { IGetVideoDetailData } from '../../../../data/youtube-api/get/getVideoDetail/IGetVideoDetailData';
import { VideoDetailEntity } from '../../../../entities/youtube-api/VideoDetailEntity';
type ResponseDTO = VideoDetailEntity;
export type RequestDTO = {
    videoId: string;
    accessToken: string;
};
export declare class GetVideoDetailUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getVideoDetail;
    constructor(getVideoDetail: IGetVideoDetailData);
    execute({ videoId, accessToken }: RequestDTO): Promise<ResponseDTO>;
}
export {};
