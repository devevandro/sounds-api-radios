import { IConverterData, Params } from '../../../../../domain/youtube/data/mp3-converter/IConverterData';
export declare class ConverterSpy implements IConverterData {
    params: Params;
    convertToMP3({ videoId }: Params): Promise<void>;
}
