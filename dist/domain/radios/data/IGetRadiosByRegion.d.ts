import { RadioEntity } from '../entities/RadioEntity';
export type Params = {
    regionId: string;
};
export type Result = RadioEntity[];
export interface IGetRadiosByRegionData {
    getRadiosByRegion(params: Params): Promise<Result>;
}
