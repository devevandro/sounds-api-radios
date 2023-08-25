import IUseCase from '../../../../core/IUseCase';
import { IUpdatePlaylistStatusData, Params, Result } from '../../data/update/IUpdatePlaylistStatusData';
export type RequestDTO = Params;
export type ResponseDTO = Result;
export declare class UpdatePlaylistStatusUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private updatePlaylistData;
    constructor(updatePlaylistData: IUpdatePlaylistStatusData);
    execute(params: Params): Promise<Result>;
}
