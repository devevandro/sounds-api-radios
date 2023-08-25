import { PostCreatePlaylistFactory } from '../../../../../../factories/youtube/youtube-api/post/postCreatePlaylist/PostCreatePlaylistFactory';
export declare class CreatePlaylistController {
    private readonly createPlaylistFactory;
    constructor(createPlaylistFactory: PostCreatePlaylistFactory);
    createPlaylist(title: string, description: string, channelId: string, accessToken: string): Promise<{
        playlistCreated: import("../../../../../../../domain/youtube/entities/youtube-api/CreatePlaylistEntity").CreatePlaylistEntity;
    }>;
}
