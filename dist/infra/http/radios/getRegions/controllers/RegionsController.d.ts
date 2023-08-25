import { GetRegionsFactory } from '../../../../factories/radios/getRegions/GetRegionsFactory';
export declare class RegionsController {
    private readonly getRegionsFactory;
    constructor(getRegionsFactory: GetRegionsFactory);
    getRegions(): Promise<import("../../../../../domain/radios/useCases/getRegions/GetRegionsUseCase").ResponseDTO>;
}
