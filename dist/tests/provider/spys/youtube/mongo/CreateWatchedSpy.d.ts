import { IWatchedData, Params, Result } from '../../../../../domain/youtube/data/mongo/IWatchedData';
export declare class CreateWatchedSpy implements IWatchedData {
    params: Params;
    result: Result;
    create(params: Params): Promise<Result>;
}
