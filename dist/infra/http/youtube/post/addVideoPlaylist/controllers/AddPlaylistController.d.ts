import { AddVideoPlaylistFactory } from '../../../../../factories/youtube/post/postVideoPlaylist/AddVideoPlaylistFactory';
export declare class AddVideoPlaylistController {
    private readonly addVideoPlaylistFactory;
    constructor(addVideoPlaylistFactory: AddVideoPlaylistFactory);
    createPlaylist(videoId: string, playlistId: string, accessToken: string): Promise<{
        video: import("../../../../../../domain/youtube/entities/AddVideoPlaylistEntity").AddVideoPlaylistEntity;
    }>;
}
