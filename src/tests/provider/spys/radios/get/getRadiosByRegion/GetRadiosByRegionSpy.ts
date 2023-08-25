import { faker } from '@faker-js/faker';
import {
  Params,
  Result,
  IGetRadiosByRegionData,
} from '../../../../../../domain/radios/data/IGetRadiosByRegion';

export class GetRadiosByRegionSpy implements IGetRadiosByRegionData {
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
    },
  ];

  async getRadiosByRegion(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
