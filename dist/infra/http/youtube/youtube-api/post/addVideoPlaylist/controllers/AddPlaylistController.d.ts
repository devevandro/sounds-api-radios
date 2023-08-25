import { AddVideoPlaylistFactory } from '../../../../../../factories/youtube/youtube-api/post/postVideoPlaylist/AddVideoPlaylistFactory';
export declare class AddVideoPlaylistController {
    private readonly addVideoPlaylistFactory;
    constructor(addVideoPlaylistFactory: AddVideoPlaylistFactory);
    createPlaylist(videoId: string, playlistId: string, accessToken: string): Promise<{
        video: import("../../../../../../../domain/youtube/entities/youtube-api/AddVideoPlaylistEntity").AddVideoPlaylistEntity;
    }>;
}
