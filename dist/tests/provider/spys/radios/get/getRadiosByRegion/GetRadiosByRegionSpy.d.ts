import { Params, Result, IGetRadiosByRegionData } from '../../../../../../domain/radios/data/IGetRadiosByRegionData';
export declare class GetRadiosByRegionSpy implements IGetRadiosByRegionData {
    params: Params;
    result: Result;
    getRadiosByRegion(params: Params): Promise<Result>;
}
