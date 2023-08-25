import { IGetPlaylistsSharedData, RequestDTO } from '../../../../../domain/youtube/data/mongo/IGetPlaylistsSharedData';
import { PlaylistSharedEntity } from '../../../../../domain/youtube/entities/mongo/PlaylistSharedEntity';
export declare class GetPlaylistsSharedSpy implements IGetPlaylistsSharedData {
    params: RequestDTO;
    result: PlaylistSharedEntity[];
    getPlaylists({ userId }: RequestDTO): Promise<PlaylistSharedEntity[]>;
}
