import IUseCase from '../../../../core/IUseCase';
import { ICreatePlaylistSharedData, Params, Result } from '../../data/mongo/ICreatePlaylistSharedData';
export type RequestDTO = Params;
export type ResponseDTO = Result;
export declare class CreatePlaylistSharedUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly createPlaylistData;
    constructor(createPlaylistData: ICreatePlaylistSharedData);
    execute(params: RequestDTO): Promise<ResponseDTO>;
}
