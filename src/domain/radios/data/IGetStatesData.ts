import { StateEntity } from '../entities/StateEntity';

export type Result = StateEntity[];

export interface IGetStatesData {
  getStates(): Promise<Result>;
}
