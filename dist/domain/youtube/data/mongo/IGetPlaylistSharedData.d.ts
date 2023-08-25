import { PlaylistSharedEntity } from '../../entities/mongo/PlaylistSharedEntity';
export type RequestDTO = {
    userId: string;
    playlistId: string;
};
export interface IGetPlaylistSharedData {
    getPlaylist({ userId, playlistId, }: RequestDTO): Promise<PlaylistSharedEntity>;
}
