import { PostCreatePlaylistUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/post/postCreatePlaylist/PostCreatePlaylistUseCase';
import { IPostCreatePlaylistData } from '../../../../../../domain/youtube/data/youtube-api/post/postCreatePlaylist/IPostCreatePlaylistData';
export declare class PostCreatePlaylistFactory extends PostCreatePlaylistUseCase {
    constructor(createPlaylistProvider: IPostCreatePlaylistData);
}
