import { IGetPlaylistSharedData, RequestDTO } from '../../../../../domain/youtube/data/mongo/IGetPlaylistSharedData';
import { PlaylistSharedEntity } from '../../../../../domain/youtube/entities/mongo/PlaylistSharedEntity';
export declare class GetPlaylistSharedSpy implements IGetPlaylistSharedData {
    params: RequestDTO;
    result: PlaylistSharedEntity;
    getPlaylist({ userId, playlistId, }: RequestDTO): Promise<PlaylistSharedEntity>;
}
