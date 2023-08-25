import { StateEntity } from '../entities/StateEntity';

export type Params = {
  stateId: string;
};

export type Result = StateEntity;

export interface IGetStateByIdData {
  getStateById(params: Params): Promise<Result>;
}
