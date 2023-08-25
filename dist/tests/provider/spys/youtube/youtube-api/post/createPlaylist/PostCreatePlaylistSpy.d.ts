import { IPostCreatePlaylistData, PostCreatePlaylistRequest, PostCreatePlaylistResponse } from '../../../../../../../domain/youtube/data/youtube-api/post/postCreatePlaylist/IPostCreatePlaylistData';
export declare class CreatePlaylistSpy implements IPostCreatePlaylistData {
    params: PostCreatePlaylistRequest;
    result: PostCreatePlaylistResponse;
    createPlaylist({ channelId, description, title, accessToken, }: PostCreatePlaylistRequest): Promise<PostCreatePlaylistResponse>;
}
