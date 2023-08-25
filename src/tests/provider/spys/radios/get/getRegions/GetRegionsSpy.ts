import { faker } from '@faker-js/faker';
import { RegionEntity } from '../../../../../../domain/radios/entities/RegionEntity';
import {
  IGetregionsData,
  Result,
} from '../../../../../../domain/radios/data/IGetRegionsData';

export class GetRegionsSpy implements IGetregionsData {
  result: Result = [
    {
      id: faker.database.mongodbObjectId(),
      name: faker.datatype.string(),
    },
    {
      id: faker.database.mongodbObjectId(),
      name: faker.datatype.string(),
    },
    {
      id: faker.database.mongodbObjectId(),
      name: faker.datatype.string(),
    },
  ];

  async getRegions(): Promise<RegionEntity[]> {
    return this.result;
  }
}
