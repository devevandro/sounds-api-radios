import { GetPlaylistFactory } from '../../../../../factories/youtube/get/getPlaylist/GetPlaylistFactory';
export declare class PlaylistController {
    private readonly getPlaylistFactory;
    constructor(getPlaylistFactory: GetPlaylistFactory);
    getPlaylist(playlistId: string, accessToken: string): Promise<import("../../../../../../domain/youtube/entities/PlaylistEntity").PlaylistEntity>;
}
