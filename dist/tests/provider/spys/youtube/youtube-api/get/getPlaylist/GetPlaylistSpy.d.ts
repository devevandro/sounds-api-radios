import { IPlaylistData, GetPlaylistRequestDTO } from '../../../../../../../domain/youtube/data/youtube-api/get/getPlaylist/IGetPlaylistData';
import { PlaylistEntity } from '../../../../../../../domain/youtube/entities/youtube-api/PlaylistEntity';
export declare class GetPlaylistSpy implements IPlaylistData {
    params: GetPlaylistRequestDTO;
    result: PlaylistEntity;
    getPlaylist({ playlistId, accessToken, }: GetPlaylistRequestDTO): Promise<PlaylistEntity>;
}
