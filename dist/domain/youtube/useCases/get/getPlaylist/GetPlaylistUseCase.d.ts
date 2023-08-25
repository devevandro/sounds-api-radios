import IUseCase from '../../../../../core/IUseCase';
import { PlaylistEntity } from '../../../entities/PlaylistEntity';
import { IPlaylistData } from '../../../data/get/getPlaylist/IGetPlaylistData';
export type RequestDTO = {
    playlistId: string;
    accessToken: string;
};
export declare class GetPlaylistUseCase implements IUseCase<RequestDTO, PlaylistEntity> {
    private readonly getPlaylist;
    constructor(getPlaylist: IPlaylistData);
    execute({ playlistId, accessToken, }: RequestDTO): Promise<PlaylistEntity>;
}
