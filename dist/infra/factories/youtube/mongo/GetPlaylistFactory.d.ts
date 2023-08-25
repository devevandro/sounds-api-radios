import { GetPlaylistSharedUseCase } from '../../../../domain/youtube/useCases/mongo/GetPlaylistSharedUseCase';
import { IGetPlaylistSharedData } from '../../../../domain/youtube/data/mongo/IGetPlaylistSharedData';
export declare class GetPlaylistSharedFactory extends GetPlaylistSharedUseCase {
    constructor(playlistSharedProvider: IGetPlaylistSharedData);
}
