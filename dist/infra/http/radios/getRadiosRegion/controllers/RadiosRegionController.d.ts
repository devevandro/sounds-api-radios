import { GetRadiosByRegionFactory } from '../../../../factories/radios/getRadioByRegion/GetRadiosByRegionFactory';
import { GetRadiosByStateFactory } from '../../../../factories/radios/GetRadiosByStateFactory';
export declare class RadiosRegionsController {
    private readonly getRadiosRegionFactory;
    private readonly getRadiosStateFactory;
    constructor(getRadiosRegionFactory: GetRadiosByRegionFactory, getRadiosStateFactory: GetRadiosByStateFactory);
    getRadiosByRegion(regionId: string): Promise<import("../../../../../domain/radios/data/IGetRadiosByRegionData").Result>;
    getRadiosByState(stateId: string): Promise<import("../../../../../domain/radios/data/IGetRadiosByStateData").Result>;
}
