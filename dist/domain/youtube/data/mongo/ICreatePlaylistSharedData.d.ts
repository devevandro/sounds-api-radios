import { PlaylistSharedEntity } from '../../entities/mongo/PlaylistSharedEntity';
export type Params = {
    userId: string;
    playlistId: string;
    playlistName: string;
};
export type Result = PlaylistSharedEntity;
export interface ICreatePlaylistSharedData {
    createPlaylist({ userId, playlistId, playlistName }: Params): Promise<Result>;
}
