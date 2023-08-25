import IUseCase from '../../../../../core/IUseCase';
import { IPostCreatePlaylistData } from '../../../data/post/postCreatePlaylist/IPostCreatePlaylistData';
import { CreatePlaylistEntity } from '../../../entities/CreatePlaylistEntity';
type ResponseDTO = {
    playlistCreated: CreatePlaylistEntity;
};
export type RequestDTO = {
    title: string;
    description: string;
    channelId: string;
    accessToken: string;
};
export declare class PostCreatePlaylistUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private createPlaylist;
    constructor(createPlaylist: IPostCreatePlaylistData);
    execute({ channelId, description, title, accessToken, }: RequestDTO): Promise<ResponseDTO>;
}
export {};
