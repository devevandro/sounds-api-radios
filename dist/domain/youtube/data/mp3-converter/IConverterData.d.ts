export type Params = {
    videoId: string;
};
export interface IConverterData {
    convertToMP3(params: Params): Promise<void>;
}
