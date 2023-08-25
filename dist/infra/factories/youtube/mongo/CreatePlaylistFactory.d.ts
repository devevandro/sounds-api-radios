import { CreatePlaylistSharedUseCase } from '../../../../domain/youtube/useCases/mongo/CreatePlaylistSharedUseCase';
import { ICreatePlaylistSharedData } from '../../../../domain/youtube/data/mongo/ICreatePlaylistSharedData';
export declare class CreatePlaylistFactory extends CreatePlaylistSharedUseCase {
    constructor(createPlaylistProvider: ICreatePlaylistSharedData);
}
