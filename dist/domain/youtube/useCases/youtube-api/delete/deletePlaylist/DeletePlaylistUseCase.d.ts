import IUseCase from '../../../../../../core/IUseCase';
import { IDeletePlaylistData } from '../../../../data/youtube-api/delete/deletePlaylist/IDeletePlaylistData';
export type RequestDTO = {
    playlistId: string;
    accessToken: string;
};
export declare class DeletePlaylistUseCase implements IUseCase<RequestDTO, boolean> {
    private deletePlaylist;
    constructor(deletePlaylist: IDeletePlaylistData);
    execute({ playlistId, accessToken }: RequestDTO): Promise<boolean>;
}
