import { faker } from '@faker-js/faker';
import {
  IGetStateByIdData,
  Params,
  Result,
} from '../../../../../../domain/radios/data/IGetStateByIdData';
import { StateEntity } from '../../../../../../domain/radios/entities/StateEntity';

export class GetStateByIdSpy implements IGetStateByIdData {
  params: Params;
  result: Result = {
    id: faker.database.mongodbObjectId(),
    name: faker.datatype.string(),
  };

  async getStateById(params: Params): Promise<StateEntity> {
    this.params = params;
    return this.result;
  }
}
