import IUseCase from '../../../../core/IUseCase';
import { IGetWatchedData, Params, Result } from '../../data/mongo/IGetWatchedsData';
export type RequestDTO = Params;
export type ResponseDTO = Result;
export declare class GetWatchedUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private watchedData;
    constructor(watchedData: IGetWatchedData);
    execute({ userId }: RequestDTO): Promise<ResponseDTO>;
}
