import { IGetRegionByIdData, Result, Params } from '../../../../../../domain/radios/data/IGetRegionByIdData';
import { RegionEntity } from '../../../../../../domain/radios/entities/RegionEntity';
export declare class GetRegionByIdSpy implements IGetRegionByIdData {
    params: Params;
    result: Result;
    getRegionById(params: Params): Promise<RegionEntity>;
}
