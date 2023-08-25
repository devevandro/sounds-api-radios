import IUseCase from '../../../../core/IUseCase';
import { IGetPlaylistSharedData } from '../../data/mongo/IGetPlaylistSharedData';
import { PlaylistSharedEntity } from '../../entities/mongo/PlaylistSharedEntity';
export type RequestDTO = {
    userId: string;
    playlistId: string;
};
export declare class GetPlaylistSharedUseCase implements IUseCase<RequestDTO, PlaylistSharedEntity> {
    private readonly getPlaylist;
    constructor(getPlaylist: IGetPlaylistSharedData);
    execute({ userId, playlistId, }: RequestDTO): Promise<PlaylistSharedEntity>;
}
