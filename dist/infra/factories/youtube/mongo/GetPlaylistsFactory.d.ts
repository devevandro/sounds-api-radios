import { GetPlaylistsSharedUseCase } from '../../../../domain/youtube/useCases/mongo/GetPlaylistsSharedUseCase';
import { IGetPlaylistsSharedData } from '../../../../domain/youtube/data/mongo/IGetPlaylistsSharedData';
export declare class GetPlaylistsSharedFactory extends GetPlaylistsSharedUseCase {
    constructor(playlistSharedProvider: IGetPlaylistsSharedData);
}
