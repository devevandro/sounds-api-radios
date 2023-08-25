import { GetSugestedVideosUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/get/getSugestedVideos/GetSugestedVideosUseCase';
import { IGetSugestedVideosData } from '../../../../../../domain/youtube/data/youtube-api/get/getSugestedVideos/IGetSugestedVideosData';
export declare class GetSugestedVideosFactory extends GetSugestedVideosUseCase {
    constructor(sugestedVideosProvider: IGetSugestedVideosData);
}
