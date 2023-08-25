import { GetPlaylistsUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/get/getPlaylists/GetPlaylistsUseCase';
import { IGetPlaylistsData } from '../../../../../../domain/youtube/data/youtube-api/get/getPlaylists/IGetPlaylistsData';
export declare class GetPlaylistsFactory extends GetPlaylistsUseCase {
    constructor(playlistsProvider: IGetPlaylistsData);
}
