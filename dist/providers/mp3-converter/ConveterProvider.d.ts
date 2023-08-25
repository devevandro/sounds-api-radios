import { IConverterData, Params } from '../../domain/youtube/data/mp3-converter/IConverterData';
export declare class ConverterProvider implements IConverterData {
    convertToMP3({ videoId }: Params): Promise<void>;
}
