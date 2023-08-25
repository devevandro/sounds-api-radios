import { ConverterUseCase } from '../../../../domain/youtube/useCases/mp3-converter/ConverterUseCase';
import { IConverterData } from '../../../../domain/youtube/data/mp3-converter/IConverterData';
export declare class ConverterFactory extends ConverterUseCase {
    constructor(converterProvider: IConverterData);
}
