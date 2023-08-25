import { ICreatePlaylistSharedData, Params, Result } from '../../../../../domain/youtube/data/mongo/ICreatePlaylistSharedData';
export declare class CreatePlaylistSharedSpy implements ICreatePlaylistSharedData {
    params: Params;
    result: Result;
    createPlaylist(params: Params): Promise<Result>;
}
