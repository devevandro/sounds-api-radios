import { DeletePlaylistUseCase } from '../../../../../domain/youtube/useCases/delete/deletePlaylist/DeletePlaylistUseCase';
import { IDeletePlaylistData } from '../../../../../domain/youtube/data/delete/deletePlaylist/IDeletePlaylistData';
export declare class DeletePlaylistFactory extends DeletePlaylistUseCase {
    constructor(deletePlaylistProvider: IDeletePlaylistData);
}
