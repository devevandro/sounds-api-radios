import * as GetPlaylistSharedData from '../../../../domain/youtube/data/mongo/IGetPlaylistSharedData';
import * as GetPlaylistsSharedData from '../../../../domain/youtube/data/mongo/IGetPlaylistsSharedData';
import * as DeletePlaylistSharedData from '../../../../domain/youtube/data/mongo/IDeletePlaylistSharedData';
import * as CreatePlaylistSharedData from '../../../../domain/youtube/data/mongo/ICreatePlaylistSharedData';
import { PlaylistSharedEntity } from '../../../../domain/youtube/entities/mongo/PlaylistSharedEntity';
export declare class MongoPlaylistRepository implements GetPlaylistSharedData.IGetPlaylistSharedData, GetPlaylistsSharedData.IGetPlaylistsSharedData, DeletePlaylistSharedData.IDeletePlaylistSharedData, CreatePlaylistSharedData.ICreatePlaylistSharedData {
    getPlaylist({ userId, playlistId, }: GetPlaylistSharedData.RequestDTO): Promise<PlaylistSharedEntity>;
    getPlaylists({ userId, }: GetPlaylistsSharedData.RequestDTO): Promise<PlaylistSharedEntity[]>;
    createPlaylist({ userId, playlistId, playlistName, }: CreatePlaylistSharedData.Params): Promise<PlaylistSharedEntity>;
    deletePlaylistShared({ userId, playlistId, }: DeletePlaylistSharedData.Params): Promise<number>;
}
