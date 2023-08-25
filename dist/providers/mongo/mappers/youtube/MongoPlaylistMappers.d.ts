import { PlaylistSharedEntity } from '../../../../domain/youtube/entities/mongo/PlaylistSharedEntity';
import { IPlaylistSchema } from '../../models/youtube/PlaylistModel';
export declare class MongoPlaylistMappers {
    static toEntity(playlist: IPlaylistSchema): PlaylistSharedEntity;
}
