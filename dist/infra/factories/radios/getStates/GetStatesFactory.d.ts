import { GetStatesUseCase } from '../../../../domain/radios/useCases/getStates/GetStatesUseCase';
import { IGetStatesData } from '../../../../domain/radios/data/IGetStatesData';
export declare class GetStatesFactory extends GetStatesUseCase {
    constructor(statesProvider: IGetStatesData);
}
