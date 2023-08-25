import { PlaylistsEntity } from '../../../entities/PlaylistsEntity';
export type GetPlaylistsRespondeDTO = {
    playlists: PlaylistsEntity;
};
export type GetPlaylistsRequestDTO = {
    channelId: string;
    accessToken: string;
};
export interface IGetPlaylistsData {
    getPlaylists({ channelId, accessToken, }: GetPlaylistsRequestDTO): Promise<GetPlaylistsRespondeDTO>;
}
