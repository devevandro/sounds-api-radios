import IUseCase from '../../../../core/IUseCase';
import { IGetRadiosByRegionData } from '../../data/IGetRadiosByRegion';
import { RadioEntity } from '../../entities/RadioEntity';
export type RequestDTO = {
    regionId: string;
};
export type ResponseDTO = Array<RadioEntity>;
export declare class GetRadiosByRegionUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getRadiosByRegionData;
    constructor(getRadiosByRegionData: IGetRadiosByRegionData);
    execute({ regionId }: RequestDTO): Promise<ResponseDTO>;
}
