import { PostCreatePlaylistUseCase } from '../../../../../domain/youtube/useCases/post/postCreatePlaylist/PostCreatePlaylistUseCase';
import { IPostCreatePlaylistData } from '../../../../../domain/youtube/data/post/postCreatePlaylist/IPostCreatePlaylistData';
export declare class PostCreatePlaylistFactory extends PostCreatePlaylistUseCase {
    constructor(createPlaylistProvider: IPostCreatePlaylistData);
}
