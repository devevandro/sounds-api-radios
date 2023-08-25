import { RegionEntity } from '../entities/RegionEntity';
export type Params = {
    regionId: string;
};
export type Result = RegionEntity;
export interface IGetRegionByIdData {
    getRegionById(params: Params): Promise<Result>;
}
