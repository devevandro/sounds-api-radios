import { DeleteVideoPlaylistUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/delete/deleteVideoPlaylist/DeleteVideoPlaylistUseCase';
import { IDeleteVideoPlaylistData } from '../../../../../../domain/youtube/data/youtube-api/delete/deleteVideoPlaylist/IDeleteVideoPlaylistData';
export declare class DeleteVideoPlaylistFactory extends DeleteVideoPlaylistUseCase {
    constructor(deleteVideoPlaylistProvider: IDeleteVideoPlaylistData);
}
