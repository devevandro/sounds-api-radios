import IUseCase from '../../../../core/IUseCase';
import { IGetStatesData } from '../../data/IGetStatesData';
import { StateEntity } from '../../entities/StateEntity';
export type ResponseDTO = StateEntity[];
export declare class GetStatesUseCase implements IUseCase<void, ResponseDTO> {
    private readonly getStatesData;
    constructor(getStatesData: IGetStatesData);
    execute(): Promise<ResponseDTO>;
}
