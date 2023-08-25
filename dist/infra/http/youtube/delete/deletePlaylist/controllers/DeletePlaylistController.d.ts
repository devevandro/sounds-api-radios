import { DeletePlaylistFactory } from '../../../../../factories/youtube/delete/deletePlaylist/DeletePlaylistFactory';
export declare class DeletePlaylistController {
    private readonly deletePlaylistFactory;
    constructor(deletePlaylistFactory: DeletePlaylistFactory);
    createPlaylist(playlistId: string, accessToken: string): Promise<boolean>;
}
