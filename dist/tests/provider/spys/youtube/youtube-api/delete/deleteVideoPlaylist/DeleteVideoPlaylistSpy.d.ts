import { DeleteVideoPlaylistRequest, IDeleteVideoPlaylistData } from '../../../../../../../domain/youtube/data/youtube-api/delete/deleteVideoPlaylist/IDeleteVideoPlaylistData';
export declare class DeleteVideoPlaylistSpy implements IDeleteVideoPlaylistData {
    params: DeleteVideoPlaylistRequest;
    deleteVideoPlaylist({ itemId, accessToken, }: DeleteVideoPlaylistRequest): Promise<boolean>;
}
