import { CreatePlaylistEntity } from '../../../entities/CreatePlaylistEntity';
export type PostCreatePlaylistResponse = {
    playlistCreated: CreatePlaylistEntity;
};
export type PostCreatePlaylistRequest = {
    title: string;
    description: string;
    channelId: string;
    accessToken: string;
};
export interface IPostCreatePlaylistData {
    createPlaylist({ channelId, description, title, accessToken, }: PostCreatePlaylistRequest): Promise<PostCreatePlaylistResponse>;
}
