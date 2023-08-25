import IUseCase from '../../../../../../core/IUseCase';
import { IRelatedVideosData, Params, Result } from '../../../../data/youtube-api/get/relatedVideos/IRelatedVideosData';
export type Request = Params;
export type Response = Result;
export declare class RelatedVideosUseCase implements IUseCase<Request, Response> {
    private readonly relatedVideosData;
    constructor(relatedVideosData: IRelatedVideosData);
    execute(params: Request): Promise<Response>;
}
