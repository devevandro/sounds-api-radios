import { PlaylistSharedEntity } from '../../entities/mongo/PlaylistSharedEntity';
export type RequestDTO = {
    userId: string;
};
export interface IGetPlaylistsSharedData {
    getPlaylists({ userId }: RequestDTO): Promise<PlaylistSharedEntity[]>;
}
