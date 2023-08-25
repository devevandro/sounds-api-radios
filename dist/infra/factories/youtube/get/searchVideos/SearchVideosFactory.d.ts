import { ISearchVideosData } from '../../../../../domain/youtube/data/get/searchVideos/ISearchVideosData';
import { SearchVideosUseCase } from '../../../../../domain/youtube/useCases/get/searchVideos/SerachVideosUseCase';
export declare class SearchVideosFactory extends SearchVideosUseCase {
    constructor(searchVideosProvider: ISearchVideosData);
}
