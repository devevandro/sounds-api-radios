import { IGetStatesData, Result } from '../../../../../../domain/radios/data/IGetStatesData';
import { StateEntity } from '../../../../../../domain/radios/entities/StateEntity';
export declare class GetStatesSpy implements IGetStatesData {
    result: Result;
    getStates(): Promise<StateEntity[]>;
}
