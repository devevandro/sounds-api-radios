import { IDeleteVideoPlaylistData } from '../../../../../domain/youtube/data/delete/deleteVideoPlaylist/IDeleteVideoPlaylistData';
import { DeleteVideoPlaylistUseCase } from '../../../../../domain/youtube/useCases/delete/deleteVideoPlaylist/DeleteVideoPlaylistUseCase';
export declare class DeleteVideoPlaylistFactory extends DeleteVideoPlaylistUseCase {
    constructor(deleteVideoPlaylistProvider: IDeleteVideoPlaylistData);
}
