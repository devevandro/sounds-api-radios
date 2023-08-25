import IUseCase from '../../../../core/IUseCase';
import { IGetPlaylistsSharedData } from '../../data/mongo/IGetPlaylistsSharedData';
import { PlaylistSharedEntity } from '../../entities/mongo/PlaylistSharedEntity';
export type RequestDTO = {
    userId: string;
};
export declare class GetPlaylistsSharedUseCase implements IUseCase<RequestDTO, PlaylistSharedEntity[]> {
    private readonly getPlaylists;
    constructor(getPlaylists: IGetPlaylistsSharedData);
    execute({ userId }: RequestDTO): Promise<PlaylistSharedEntity[]>;
}
