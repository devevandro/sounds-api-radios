import { RegionEntity } from '../../../../../../domain/radios/entities/RegionEntity';
import { IGetregionsData, Result } from '../../../../../../domain/radios/data/IGetRegionsData';
export declare class GetRegionsSpy implements IGetregionsData {
    result: Result;
    getRegions(): Promise<RegionEntity[]>;
}
