import IUseCase from '../../../../../../core/IUseCase';
import { IPlaylistData } from '../../../../data/youtube-api/get/getPlaylist/IGetPlaylistData';
import { IAddVideoPlaylistData } from '../../../../data/youtube-api/post/postVideoPlaylist/IAddVideoPlaylistData';
import { AddVideoPlaylistEntity } from '../../../../entities/youtube-api/AddVideoPlaylistEntity';
type ResponseDTO = {
    video: AddVideoPlaylistEntity;
};
export type RequestDTO = {
    playlistId: string;
    videoId: string;
    accessToken: string;
};
export declare class AddVideoPlaylistUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly addVideoPlaylist;
    private readonly getPlaylist;
    constructor(addVideoPlaylist: IAddVideoPlaylistData, getPlaylist: IPlaylistData);
    execute({ playlistId, videoId, accessToken, }: RequestDTO): Promise<ResponseDTO>;
}
export {};
