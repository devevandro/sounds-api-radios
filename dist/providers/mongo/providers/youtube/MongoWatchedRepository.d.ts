import * as WatchedData from '../../../../domain/youtube/data/mongo/IWatchedData';
import * as GetWatchedsData from '../../../../domain/youtube/data/mongo/IGetWatchedsData';
export declare class MongoWatchedRepository implements WatchedData.IWatchedData, GetWatchedsData.IGetWatchedData {
    create({ user, thumbnailUrl, title, videoId, }: WatchedData.Params): Promise<WatchedData.Result>;
    getWatcheds({ userId, }: GetWatchedsData.Params): Promise<GetWatchedsData.Result>;
}
