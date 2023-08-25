import { GetRegionByIdUseCase } from '../../../../domain/radios/useCases/getRegionById/GetRegionByIdUseCase';
import { IGetRegionByIdData } from '../../../../domain/radios/data/IGetRegionByIdData';
export declare class GetRegionByIdFactory extends GetRegionByIdUseCase {
    constructor(regionProvider: IGetRegionByIdData);
}
