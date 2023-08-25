import { RegionEntity } from '../entities/RegionEntity';

export type Result = RegionEntity[];

export interface IGetregionsData {
  getRegions(): Promise<Result>;
}
