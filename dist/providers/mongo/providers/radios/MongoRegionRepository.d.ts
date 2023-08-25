import * as GetRegionByIdData from '../../../../domain/radios/data/IGetRegionByIdData';
export declare class MongoRegionRepository implements GetRegionByIdData.IGetRegionByIdData {
    getRegionById({ regionId, }: GetRegionByIdData.Params): Promise<GetRegionByIdData.Result>;
}
