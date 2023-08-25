import * as GetRegionsData from '../../../../domain/radios/data/IGetRegionsData';
export declare class MongoRegionsRepository implements GetRegionsData.IGetregionsData {
    getRegions(): Promise<GetRegionsData.Result>;
}
