import IUseCase from '../../../../../../core/IUseCase';
import { IPlaylistData } from '../../../../data/youtube-api/get/getPlaylist/IGetPlaylistData';
import { PlaylistEntity } from '../../../../entities/youtube-api/PlaylistEntity';
export type RequestDTO = {
    playlistId: string;
    accessToken: string;
};
export declare class GetPlaylistUseCase implements IUseCase<RequestDTO, PlaylistEntity> {
    private readonly getPlaylist;
    constructor(getPlaylist: IPlaylistData);
    execute({ playlistId, accessToken, }: RequestDTO): Promise<PlaylistEntity>;
}
