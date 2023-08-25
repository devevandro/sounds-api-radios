import { IGetStateByIdData, Params, Result } from '../../../../../../domain/radios/data/IGetStateByIdData';
import { StateEntity } from '../../../../../../domain/radios/entities/StateEntity';
export declare class GetStateByIdSpy implements IGetStateByIdData {
    params: Params;
    result: Result;
    getStateById(params: Params): Promise<StateEntity>;
}
