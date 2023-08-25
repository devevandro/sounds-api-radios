import { DeleteVideoPlaylistFactory } from '../../../../../factories/youtube/delete/deleteVideoPlaylist/DeleteVideoPlaylistFactory';
export declare class DeleteVideoPlaylistController {
    private readonly deleteVideoPlaylistFactory;
    constructor(deleteVideoPlaylistFactory: DeleteVideoPlaylistFactory);
    createPlaylist(itemId: string, accessToken: string): Promise<boolean>;
}
