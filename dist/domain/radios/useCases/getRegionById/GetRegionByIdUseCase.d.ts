import IUseCase from '../../../../core/IUseCase';
import { IGetRegionByIdData } from '../../data/IGetRegionByIdData';
import { RegionEntity } from '../../entities/RegionEntity';
export type RequestDTO = {
    regionId: string;
};
export type ResponseDTO = RegionEntity;
export declare class GetRegionByIdUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getRegionByIdData;
    constructor(getRegionByIdData: IGetRegionByIdData);
    execute({ regionId }: RequestDTO): Promise<ResponseDTO>;
}
