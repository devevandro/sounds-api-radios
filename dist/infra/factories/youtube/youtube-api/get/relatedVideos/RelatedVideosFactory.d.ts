import { RelatedVideosUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/get/relatedVideos/RelatedVideosUseCase';
import { IRelatedVideosData } from '../../../../../../domain/youtube/data/youtube-api/get/relatedVideos/IRelatedVideosData';
export declare class RelatedVideosFactory extends RelatedVideosUseCase {
    constructor(relatedVideosProvider: IRelatedVideosData);
}
