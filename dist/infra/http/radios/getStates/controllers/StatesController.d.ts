import { GetStatesFactory } from '../../../../factories/radios/getStates/GetStatesFactory';
export declare class StatesController {
    private readonly getStatesFactory;
    constructor(getStatesFactory: GetStatesFactory);
    getStates(): Promise<import("../../../../../domain/radios/useCases/getStates/GetStatesUseCase").ResponseDTO>;
}
