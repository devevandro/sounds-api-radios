import IUseCase from '../../../../../core/IUseCase';
import { IGetPlaylistsData } from '../../../data/get/getPlaylists/IGetPlaylistsData';
import { PlaylistsEntity } from '../../../entities/PlaylistsEntity';
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
