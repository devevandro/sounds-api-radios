import { IAddVideoPlaylistData } from '../../../../../domain/youtube/data/post/postVideoPlaylist/IAddVideoPlaylistData';
import { IPlaylistData } from '../../../../../domain/youtube/data/get/getPlaylist/IGetPlaylistData';
import { AddVideoPlaylistUseCase } from '../../../../../domain/youtube/useCases/post/postVideoPlaylist/AddVideoPlaylistUseCase';
export declare class AddVideoPlaylistFactory extends AddVideoPlaylistUseCase {
    constructor(addVideoPlaylistProvider: IAddVideoPlaylistData, getPlaylistProvider: IPlaylistData);
}
