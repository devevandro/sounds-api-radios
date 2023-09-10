import IUseCase from '../../../../core/IUseCase';
import { IGetRadiosByRegionData, Result, Params } from '../../data/IGetRadiosByRegionData';
export type RequestDTO = Params;
export type ResponseDTO = Result;
export declare class GetRadiosByRegionUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getRadiosByRegionData;
    constructor(getRadiosByRegionData: IGetRadiosByRegionData);
    execute({ regionId }: RequestDTO): Promise<ResponseDTO>;
}
