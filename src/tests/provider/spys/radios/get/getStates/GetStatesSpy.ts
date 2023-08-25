import { faker } from '@faker-js/faker';
import {
  IGetStatesData,
  Result,
} from '../../../../../../domain/radios/data/IGetStatesData';
import { StateEntity } from '../../../../../../domain/radios/entities/StateEntity';

export class GetStatesSpy implements IGetStatesData {
  result: Result = [
    {
      id: faker.database.mongodbObjectId(),
      name: faker.datatype.string(),
    },
    {
      id: faker.database.mongodbObjectId(),
      name: faker.datatype.string(),
    },
  ];

  async getStates(): Promise<StateEntity[]> {
    return this.result;
  }
}
