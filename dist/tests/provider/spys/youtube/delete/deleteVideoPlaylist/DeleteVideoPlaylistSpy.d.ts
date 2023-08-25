import { IDeleteVideoPlaylistData, DeleteVideoPlaylistRequest } from '../../../../../../domain/youtube/data/delete/deleteVideoPlaylist/IDeleteVideoPlaylistData';
export declare class DeleteVideoPlaylistSpy implements IDeleteVideoPlaylistData {
    params: DeleteVideoPlaylistRequest;
    deleteVideoPlaylist({ itemId, accessToken, }: DeleteVideoPlaylistRequest): Promise<boolean>;
}
