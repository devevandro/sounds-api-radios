import { GetRegionsUseCase } from '../../../../domain/radios/useCases/getRegions/GetRegionsUseCase';
import { IGetregionsData } from '../../../../domain/radios/data/IGetRegionsData';
export declare class GetRegionsFactory extends GetRegionsUseCase {
    constructor(regionsProvider: IGetregionsData);
}
