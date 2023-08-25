import { IRelatedVideosData, Params, Result } from '../../../../../../../domain/youtube/data/youtube-api/get/relatedVideos/IRelatedVideosData';
export declare class RelatedVideosSpy implements IRelatedVideosData {
    params: Params;
    result: Result;
    relatedVideos({ videoId, accessToken }: Params): Promise<Result>;
}
