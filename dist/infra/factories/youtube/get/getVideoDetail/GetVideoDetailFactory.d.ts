import { IGetVideoDetailData } from '../../../../../domain/youtube/data/get/getVideoDetail/IGetVideoDetailData';
import { GetVideoDetailUseCase } from '../../../../../domain/youtube/useCases/get/getVideoDetails/GetVideoDetailUseCase';
export declare class GetVideoDetailFactory extends GetVideoDetailUseCase {
    constructor(VideoDetailProvider: IGetVideoDetailData);
}
