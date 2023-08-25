import IUseCase from '../../../../../core/IUseCase';
import { IDeleteVideoPlaylistData } from '../../../data/delete/deleteVideoPlaylist/IDeleteVideoPlaylistData';
export type RequestDTO = {
    itemId: string;
    accessToken: string;
};
export declare class DeleteVideoPlaylistUseCase implements IUseCase<RequestDTO, boolean> {
    private deleteVideoPlaylist;
    constructor(deleteVideoPlaylist: IDeleteVideoPlaylistData);
    execute({ itemId, accessToken }: RequestDTO): Promise<boolean>;
}
