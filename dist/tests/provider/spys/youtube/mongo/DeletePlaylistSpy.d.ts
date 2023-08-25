import { IDeletePlaylistData, DeletePlaylistRequest } from '../../../../../../domain/youtube/data/delete/deletePlaylist/IDeletePlaylistData';
export declare class DeletePlaylistSpy implements IDeletePlaylistData {
    params: DeletePlaylistRequest;
    deletePlaylist({ playlistId, accessToken, }: DeletePlaylistRequest): Promise<boolean>;
}
