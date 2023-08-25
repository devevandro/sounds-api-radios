import { ConverterFactory } from '../../../../factories/youtube/mp3-converter/ConverterFactory';
export declare class ConverterController {
    private readonly converterFactory;
    constructor(converterFactory: ConverterFactory);
    converterToMP3(videoId: string): Promise<void>;
}
