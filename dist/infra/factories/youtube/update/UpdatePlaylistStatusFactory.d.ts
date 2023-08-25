import { UpdatePlaylistStatusUseCase } from '../../../../domain/youtube/useCases/update/UpdatePlaylistStatusUseCase';
import { IUpdatePlaylistStatusData } from '../../../../domain/youtube/data/update/IUpdatePlaylistStatusData';
export declare class UpdatePlaylistStatusFactory extends UpdatePlaylistStatusUseCase {
    constructor(updatePlaylistStatusProvider: IUpdatePlaylistStatusData);
}
