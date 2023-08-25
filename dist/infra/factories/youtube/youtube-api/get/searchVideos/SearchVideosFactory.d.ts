import { SearchVideosUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/get/searchVideos/SerachVideosUseCase';
import { ISearchVideosData } from '../../../../../../domain/youtube/data/youtube-api/get/searchVideos/ISearchVideosData';
export declare class SearchVideosFactory extends SearchVideosUseCase {
    constructor(searchVideosProvider: ISearchVideosData);
}
