import { RadioEntity } from '../entities/RadioEntity';
import { RegionEntity } from '../entities/RegionEntity';

export type Params = {
  stateId: string;
};

export type Result = Array<RadioEntity>;

export interface IGetRadiosByStateData {
  getRadiosByState(params: Params): Promise<Result>;
}
