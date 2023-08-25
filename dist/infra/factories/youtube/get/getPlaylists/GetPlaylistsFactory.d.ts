import { IGetPlaylistsData } from '../../../../../domain/youtube/data/get/getPlaylists/IGetPlaylistsData';
import { GetPlaylistsUseCase } from '../../../../../domain/youtube/useCases/get/getPlaylists/GetPlaylistsUseCase';
export declare class GetPlaylistsFactory extends GetPlaylistsUseCase {
    constructor(playlistsProvider: IGetPlaylistsData);
}
