import { PlaylistEntity } from '../../../../entities/youtube-api/PlaylistEntity';
export type GetPlaylistRequestDTO = {
    playlistId: string;
    accessToken: string;
};
export interface IPlaylistData {
    getPlaylist({ playlistId, accessToken, }: GetPlaylistRequestDTO): Promise<PlaylistEntity>;
}
