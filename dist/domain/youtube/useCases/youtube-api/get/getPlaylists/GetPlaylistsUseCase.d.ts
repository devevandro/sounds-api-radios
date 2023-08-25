import IUseCase from '../../../../../../core/IUseCase';
import { IGetPlaylistsData } from '../../../../data/youtube-api/get/getPlaylists/IGetPlaylistsData';
import { PlaylistsEntity } from '../../../../entities/youtube-api/PlaylistsEntity';
type ResponseDTO = {
    playlists: PlaylistsEntity;
};
export type RequestDTO = {
    channelId: string;
    accessToken: string;
};
export declare class GetPlaylistsUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getPlaylists;
    constructor(getPlaylists: IGetPlaylistsData);
    execute({ channelId, accessToken }: RequestDTO): Promise<ResponseDTO>;
}
export {};
