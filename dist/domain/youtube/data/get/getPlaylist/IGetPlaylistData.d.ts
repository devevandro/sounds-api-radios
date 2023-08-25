import { PlaylistEntity } from '../../../entities/PlaylistEntity';
export type GetPlaylistRequestDTO = {
    playlistId: string;
    accessToken: string;
};
export interface IPlaylistData {
    getPlaylist({ playlistId, accessToken, }: GetPlaylistRequestDTO): Promise<PlaylistEntity>;
}
