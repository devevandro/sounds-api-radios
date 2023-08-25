import * as GetStatesData from '../../../../domain/radios/data/IGetStatesData';
export declare class MongoStatesRepository implements GetStatesData.IGetStatesData {
    getStates(): Promise<GetStatesData.Result>;
}
