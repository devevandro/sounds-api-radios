import { WatchedUseCase } from '../../../../domain/youtube/useCases/mongo/WatchedUseCase';
import { IWatchedData } from '../../../../domain/youtube/data/mongo/IWatchedData';
export declare class WatchedFactory extends WatchedUseCase {
    constructor(watchedProvider: IWatchedData);
}
