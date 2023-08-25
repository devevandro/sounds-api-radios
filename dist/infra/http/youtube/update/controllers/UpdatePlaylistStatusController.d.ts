import { UpdatePlaylistStatusFactory } from '../../../../factories/youtube/update/UpdatePlaylistStatusFactory';
import { UpdatePlaylistStatusDTO } from '../UpdatePlaylistStatusDTO';
export declare class UpdatePlaylistStatusController {
    private readonly updatePlaylistStatusFactory;
    constructor(updatePlaylistStatusFactory: UpdatePlaylistStatusFactory);
    createPlaylist({ newStatus, playlistId, accessToken, title }: UpdatePlaylistStatusDTO): Promise<import("../../../../../domain/youtube/entities/PlaylistEntity").PlaylistEntity>;
}
