import { IUpdatePlaylistStatusData, Params, Result } from '../../../../../../domain/youtube/data/youtube-api/update/IUpdatePlaylistStatusData';
export declare class UpdatePlaylistStatusSpy implements IUpdatePlaylistStatusData {
    params: Params;
    result: Result;
    updatePlaylist(params: Params): Promise<Result>;
}
