import { faker } from '@faker-js/faker';
import {
  IGetRegionByIdData,
  Result,
  Params,
} from '../../../../../../domain/radios/data/IGetRegionByIdData';
import { RegionEntity } from '../../../../../../domain/radios/entities/RegionEntity';

export class GetRegionByIdSpy implements IGetRegionByIdData {
  params: Params;
  result: Result = {
    id: faker.database.mongodbObjectId(),
    name: faker.datatype.string(),
  };

  async getRegionById(params: Params): Promise<RegionEntity> {
    this.params = params;
    return this.result;
  }
}
