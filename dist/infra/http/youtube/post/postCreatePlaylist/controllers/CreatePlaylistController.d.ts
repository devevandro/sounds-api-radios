import { PostCreatePlaylistFactory } from '../../../../../factories/youtube/post/postCreatePlaylist/PostCreatePlaylistFactory';
export declare class CreatePlaylistController {
    private readonly createPlaylistFactory;
    constructor(createPlaylistFactory: PostCreatePlaylistFactory);
    createPlaylist(title: string, description: string, channelId: string, accessToken: string): Promise<{
        playlistCreated: import("../../../../../../domain/youtube/entities/CreatePlaylistEntity").CreatePlaylistEntity;
    }>;
}
