import IUseCase from '../../../../core/IUseCase';
import { IDeletePlaylistSharedData } from '../../data/mongo/IDeletePlaylistSharedData';
export type RequestDTO = {
    userId: string;
    playlistId: string;
};
export declare class DeletePlaylistSharedUseCase implements IUseCase<RequestDTO, number> {
    private deletePlaylistSharedData;
    constructor(deletePlaylistSharedData: IDeletePlaylistSharedData);
    execute({ userId, playlistId }: RequestDTO): Promise<number>;
}
