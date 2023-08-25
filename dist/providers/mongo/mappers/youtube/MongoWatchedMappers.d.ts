import { WatchedEntity } from '../../../../domain/youtube/entities/mongo/WatchedEntity';
import { IWatchedSchema } from '../../models/youtube/WatchedModel';
export declare class MongoWatchedMappers {
    static toEntity(object: IWatchedSchema): WatchedEntity;
}
