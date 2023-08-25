import { DeletePlaylistSharedUseCase } from '../../../../domain/youtube/useCases/mongo/DeletePlaylistSharedUseCase';
import { IDeletePlaylistSharedData } from '../../../../domain/youtube/data/mongo/IDeletePlaylistSharedData';
export declare class DeletePlaylistSharedFactory extends DeletePlaylistSharedUseCase {
    constructor(playlistSharedProvider: IDeletePlaylistSharedData);
}
