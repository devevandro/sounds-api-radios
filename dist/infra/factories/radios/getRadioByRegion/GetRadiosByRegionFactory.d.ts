import { GetRadiosByRegionUseCase } from '../../../../domain/radios/useCases/getRadiosByRegion/GetRadiosByRegionUseCase';
import { IGetRadiosByRegionData } from '../../../../domain/radios/data/IGetRadiosByRegion';
export declare class GetRadiosByRegionFactory extends GetRadiosByRegionUseCase {
    constructor(radiosRegionProvider: IGetRadiosByRegionData);
}
