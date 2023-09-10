import * as GetRadiosByRegionData from '../../../../domain/radios/data/IGetRadiosByRegionData';
import * as GetRadiosByStateData from '../../../../domain/radios/data/IGetRadiosByStateData';
export declare class MongoRadioRepository implements GetRadiosByRegionData.IGetRadiosByRegionData, GetRadiosByStateData.IGetRadiosByStateData {
    getRadiosByRegion({ regionId, }: GetRadiosByRegionData.Params): Promise<GetRadiosByRegionData.Result>;
    getRadiosByState({ stateId, }: GetRadiosByStateData.Params): Promise<GetRadiosByStateData.Result>;
}
