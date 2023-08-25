import { GetStateByIdUseCase } from '../../../../domain/radios/useCases/getStateById/GetStateByIdUseCase';
import { IGetStateByIdData } from '../../../../domain/radios/data/IGetStateByIdData';
export declare class GetStateByIdFactory extends GetStateByIdUseCase {
    constructor(allStateProvider: IGetStateByIdData);
}
