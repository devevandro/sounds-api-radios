import * as GetRadiosByRegionData from '../../../../domain/radios/data/IGetRadiosByRegion';
export declare class MongoRadioRepository implements GetRadiosByRegionData.IGetRadiosByRegionData {
    getRadiosByRegion({ regionId, }: GetRadiosByRegionData.Params): Promise<GetRadiosByRegionData.Result>;
}
