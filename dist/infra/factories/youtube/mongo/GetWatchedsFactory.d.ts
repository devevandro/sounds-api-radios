import { GetWatchedUseCase } from '../../../../domain/youtube/useCases/mongo/GetWatchedsUseCase';
import { IGetWatchedData } from '../../../../domain/youtube/data/mongo/IGetWatchedsData';
export declare class GetWatchedsFactory extends GetWatchedUseCase {
    constructor(watchedProvider: IGetWatchedData);
}
