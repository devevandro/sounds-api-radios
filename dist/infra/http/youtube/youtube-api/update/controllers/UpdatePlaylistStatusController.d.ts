import { UpdatePlaylistStatusFactory } from '../../../../../factories/youtube/youtube-api/update/UpdatePlaylistStatusFactory';
import { UpdatePlaylistStatusDTO } from '../UpdatePlaylistStatusDTO';
export declare class UpdatePlaylistStatusController {
    private readonly updatePlaylistStatusFactory;
    constructor(updatePlaylistStatusFactory: UpdatePlaylistStatusFactory);
    createPlaylist({ newStatus, playlistId, accessToken, title }: UpdatePlaylistStatusDTO): Promise<import("../../../../../../domain/youtube/entities/youtube-api/PlaylistEntity").PlaylistEntity>;
}
