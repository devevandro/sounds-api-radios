import { AddVideoPlaylistUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/post/postVideoPlaylist/AddVideoPlaylistUseCase';
import { IAddVideoPlaylistData } from '../../../../../../domain/youtube/data/youtube-api/post/postVideoPlaylist/IAddVideoPlaylistData';
import { IPlaylistData } from '../../../../../../domain/youtube/data/youtube-api/get/getPlaylist/IGetPlaylistData';
export declare class AddVideoPlaylistFactory extends AddVideoPlaylistUseCase {
    constructor(addVideoPlaylistProvider: IAddVideoPlaylistData, getPlaylistProvider: IPlaylistData);
}
