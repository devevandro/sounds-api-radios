import { faker } from '@faker-js/faker';
import {
  IGetRadiosByStateData,
  Params,
  Result,
} from '../../../../../../domain/radios/data/IGetRadiosByStateData';

export class GetRadiosByStateSpy implements IGetRadiosByStateData {
  params: Params;
  result: Result = [
    {
      city: faker.datatype.string(),
      id: faker.datatype.string(),
      img: faker.datatype.string(),
      isFavorite: faker.datatype.boolean(),
      name: faker.datatype.string(),
      region: faker.datatype.string(),
      state: faker.datatype.string(),
      url: faker.datatype.string(),
      prefix: faker.datatype.string(),
    },
  ];

  async getRadiosByState(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
