import { GetPlaylistFactory } from '../../../../../../factories/youtube/youtube-api/get/getPlaylist/GetPlaylistFactory';
export declare class PlaylistController {
    private readonly getPlaylistFactory;
    constructor(getPlaylistFactory: GetPlaylistFactory);
    getPlaylist(playlistId: string, accessToken: string): Promise<import("../../../../../../../domain/youtube/entities/youtube-api/PlaylistEntity").PlaylistEntity>;
}
