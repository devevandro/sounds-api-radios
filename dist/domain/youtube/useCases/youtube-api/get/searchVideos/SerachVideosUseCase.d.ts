import IUseCase from '../../../../../../core/IUseCase';
import { ISearchVideosData } from '../../../../data/youtube-api/get/searchVideos/ISearchVideosData';
import { SearchVideosEntity } from '../../../../entities/youtube-api/SearchVideosEntity';
export type RequestDTO = {
    videoName: string;
    accessToken: string;
};
export declare class SearchVideosUseCase implements IUseCase<RequestDTO, SearchVideosEntity> {
    private readonly searchVideosData;
    constructor(searchVideosData: ISearchVideosData);
    execute({ videoName, accessToken, }: RequestDTO): Promise<SearchVideosEntity>;
}
