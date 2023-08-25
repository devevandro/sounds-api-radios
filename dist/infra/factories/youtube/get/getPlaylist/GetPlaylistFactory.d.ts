import { GetPlaylistUseCase } from '../../../../../domain/youtube/useCases/get/getPlaylist/GetPlaylistUseCase';
import { IPlaylistData } from '../../../../../domain/youtube/data/get/getPlaylist/IGetPlaylistData';
export declare class GetPlaylistFactory extends GetPlaylistUseCase {
    constructor(playlistProvider: IPlaylistData);
}
