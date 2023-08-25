import { GetStateByIdFactory } from '../../../../factories/radios/getStateById/GetStateByIdFactory';
export declare class StateByIdController {
    private readonly getStateFactory;
    constructor(getStateFactory: GetStateByIdFactory);
    getStateById(stateId: string): Promise<import("../../../../../domain/radios/entities/StateEntity").StateEntity>;
}
