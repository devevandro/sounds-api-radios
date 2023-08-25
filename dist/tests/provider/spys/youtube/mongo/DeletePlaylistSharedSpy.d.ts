import { IDeletePlaylistSharedData, Params } from '../../../../../domain/youtube/data/mongo/IDeletePlaylistSharedData';
export declare class DeletePlaylistSharedSpy implements IDeletePlaylistSharedData {
    params: Params;
    deletePlaylistShared({ userId, playlistId }: Params): Promise<number>;
}
