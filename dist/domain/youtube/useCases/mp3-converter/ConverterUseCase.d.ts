import IUseCase from '../../../../core/IUseCase';
import { IConverterData, Params } from '../../data/mp3-converter/IConverterData';
export type Request = Params;
export declare class ConverterUseCase implements IUseCase<Request, void> {
    private readonly converterData;
    constructor(converterData: IConverterData);
    execute(params: Params): Promise<void>;
}
