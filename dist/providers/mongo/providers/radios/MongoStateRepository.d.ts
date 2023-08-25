import * as GetStateByIdData from '../../../../domain/radios/data/IGetStateByIdData';
export declare class MongoStateRepository implements GetStateByIdData.IGetStateByIdData {
    getStateById({ stateId, }: GetStateByIdData.Params): Promise<GetStateByIdData.Result>;
}
