import IUseCase from '../../../../../core/IUseCase';
import { ISearchVideosData } from '../../../data/get/searchVideos/ISearchVideosData';
import { SearchVideosEntity } from '../../../entities/SearchVideosEntity';
export type RequestDTO = {
    videoName: string;
    accessToken: string;
};
export declare class SearchVideosUseCase implements IUseCase<RequestDTO, SearchVideosEntity> {
    private readonly searchVideos;
    constructor(searchVideos: ISearchVideosData);
    execute({ videoName, accessToken, }: RequestDTO): Promise<SearchVideosEntity>;
}
