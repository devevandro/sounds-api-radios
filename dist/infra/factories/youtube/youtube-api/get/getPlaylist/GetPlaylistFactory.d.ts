import { GetPlaylistUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/get/getPlaylist/GetPlaylistUseCase';
import { IPlaylistData } from '../../../../../../domain/youtube/data/youtube-api/get/getPlaylist/IGetPlaylistData';
export declare class GetPlaylistFactory extends GetPlaylistUseCase {
    constructor(playlistProvider: IPlaylistData);
}
