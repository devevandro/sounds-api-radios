import IUseCase from '../../../../core/IUseCase';
import { IGetStateByIdData } from '../../data/IGetStateByIdData';
import { StateEntity } from '../../entities/StateEntity';
export type RequestDTO = {
    stateId: string;
};
export type ResponseDTO = StateEntity;
export declare class GetStateByIdUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getStateByIdData;
    constructor(getStateByIdData: IGetStateByIdData);
    execute({ stateId }: RequestDTO): Promise<ResponseDTO>;
}
