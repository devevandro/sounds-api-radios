import { UpdatePlaylistStatusUseCase } from '../../../../../domain/youtube/useCases/youtube-api/update/UpdatePlaylistStatusUseCase';
import { IUpdatePlaylistStatusData } from '../../../../../domain/youtube/data/youtube-api/update/IUpdatePlaylistStatusData';
export declare class UpdatePlaylistStatusFactory extends UpdatePlaylistStatusUseCase {
    constructor(updatePlaylistStatusProvider: IUpdatePlaylistStatusData);
}
