import { GetRegionByIdFactory } from '../../../../factories/radios/getRegionById/GetRegionByIdFactory';
export declare class RegionByIdController {
    private readonly getRegionFactory;
    constructor(getRegionFactory: GetRegionByIdFactory);
    getRegionById(regionId: string): Promise<import("../../../../../domain/radios/entities/RegionEntity").RegionEntity>;
}
