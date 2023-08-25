import { GetVideoDetailUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/get/getVideoDetails/GetVideoDetailUseCase';
import { IGetVideoDetailData } from '../../../../../../domain/youtube/data/youtube-api/get/getVideoDetail/IGetVideoDetailData';
export declare class GetVideoDetailFactory extends GetVideoDetailUseCase {
    constructor(VideoDetailProvider: IGetVideoDetailData);
}
