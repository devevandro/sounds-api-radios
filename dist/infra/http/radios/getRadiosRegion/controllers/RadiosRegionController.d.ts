import { GetRadiosByRegionFactory } from '../../../../factories/radios/getRadioByRegion/GetRadiosByRegionFactory';
export declare class RadiosRegionsController {
    private readonly getRadiosRegionFactory;
    constructor(getRadiosRegionFactory: GetRadiosByRegionFactory);
    getRadiosByRegion(regionId: string): Promise<import("../../../../../domain/radios/useCases/getRadiosByRegion/GetRadiosByRegionUseCase").ResponseDTO>;
}
