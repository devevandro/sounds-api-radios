import { IPostCreatePlaylistData, PostCreatePlaylistResponse, PostCreatePlaylistRequest } from '../../../../../../domain/youtube/data/post/postCreatePlaylist/IPostCreatePlaylistData';
export declare class CreatePlaylistSpy implements IPostCreatePlaylistData {
    params: PostCreatePlaylistRequest;
    result: PostCreatePlaylistResponse;
    createPlaylist({ channelId, description, title, accessToken, }: PostCreatePlaylistRequest): Promise<PostCreatePlaylistResponse>;
}
