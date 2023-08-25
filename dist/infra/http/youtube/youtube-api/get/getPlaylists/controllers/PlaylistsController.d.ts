import { GetPlaylistsFactory } from '../../../../../../factories/youtube/youtube-api/get/getPlaylists/GetPlaylistsFactory';
export declare class PlaylistsController {
    private readonly getPlaylistsFactory;
    constructor(getPlaylistsFactory: GetPlaylistsFactory);
    getPlaylist(channelId: string, accessToken: string): Promise<{
        playlists: import("../../../../../../../domain/youtube/entities/youtube-api/PlaylistsEntity").PlaylistsEntity;
    }>;
}
