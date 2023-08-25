import { PlaylistEntity } from '../../../entities/youtube-api/PlaylistEntity';
export type Params = {
    playlistId: string;
    newStatus: string;
    title: string;
    accessToken: string;
};
export type Result = PlaylistEntity;
export interface IUpdatePlaylistStatusData {
    updatePlaylist(params: Params): Promise<Result>;
}
