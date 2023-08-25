import { DeletePlaylistUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/delete/deletePlaylist/DeletePlaylistUseCase';
import { IDeletePlaylistData } from '../../../../../../domain/youtube/data/youtube-api/delete/deletePlaylist/IDeletePlaylistData';
export declare class DeletePlaylistFactory extends DeletePlaylistUseCase {
    constructor(deletePlaylistProvider: IDeletePlaylistData);
}
