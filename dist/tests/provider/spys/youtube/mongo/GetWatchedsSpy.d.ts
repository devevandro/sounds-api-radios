import { IGetWatchedData, Params, Result } from '../../../../../domain/youtube/data/mongo/IGetWatchedsData';
export declare class GetWatchedsSpy implements IGetWatchedData {
    params: Params;
    result: Result;
    getWatcheds({ userId }: Params): Promise<Result>;
}
