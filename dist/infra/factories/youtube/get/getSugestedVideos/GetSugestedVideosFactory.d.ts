import { IGetSugestedVideosData } from '../../../../../domain/youtube/data/get/getSugestedVideos/IGetSugestedVideosData';
import { GetSugestedVideosUseCase } from '../../../../../domain/youtube/useCases/get/getSugestedVideos/GetSugestedVideosUseCase';
export declare class GetSugestedVideosFactory extends GetSugestedVideosUseCase {
    constructor(sugestedVideosProvider: IGetSugestedVideosData);
}
