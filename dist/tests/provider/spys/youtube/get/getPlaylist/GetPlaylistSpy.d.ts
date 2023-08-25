import { GetPlaylistRequestDTO, IPlaylistData } from '../../../../../../domain/youtube/data/get/getPlaylist/IGetPlaylistData';
import { PlaylistEntity } from '../../../../../../domain/youtube/entities/PlaylistEntity';
export declare class GetPlaylistSpy implements IPlaylistData {
    params: GetPlaylistRequestDTO;
    result: PlaylistEntity;
    getPlaylist({ playlistId, accessToken, }: GetPlaylistRequestDTO): Promise<PlaylistEntity>;
}
