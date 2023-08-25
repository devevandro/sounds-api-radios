import { WatchedEntity } from '../../entities/mongo/WatchedEntity';
export type Params = {
    user: string;
    title: string;
    videoId: string;
    thumbnailUrl: string;
};
export type Result = WatchedEntity;
export interface IWatchedData {
    create(params: Params): Promise<Result>;
}
