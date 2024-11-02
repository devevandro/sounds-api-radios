import { RadioEntity } from '../entities/RadioEntity';

export type Params = {
  stateId: string;
};

export type Result = Array<RadioEntity>;

export interface IGetRadiosByStateData {
  getRadiosByState(params: Params): Promise<Result>;
}
