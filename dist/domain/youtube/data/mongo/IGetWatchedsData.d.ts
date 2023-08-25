import { WatchedEntity } from '../../entities/mongo/WatchedEntity';
export type Params = {
    userId: string;
};
export type Result = WatchedEntity[];
export interface IGetWatchedData {
    getWatcheds(params: Params): Promise<Result>;
}
