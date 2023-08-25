import IUseCase from '../../../../core/IUseCase';
import { Params, Result, IWatchedData } from '../../data/mongo/IWatchedData';
import { WatchedEntity } from '../../entities/mongo/WatchedEntity';
export type RequestDTO = Params;
export type ResponseDTO = Result;
export declare class WatchedUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private watchedData;
    constructor(watchedData: IWatchedData);
    execute(params: Params): Promise<WatchedEntity>;
}
