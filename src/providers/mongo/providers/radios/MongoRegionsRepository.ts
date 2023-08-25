import * as GetRegionsData from '../../../../domain/radios/data/IGetRegionsData';
import { MongoRegionMappers } from '../../mappers/radios/MongoRegionMappers';
import { RegionModel } from '../../models/radios/RegionModel';

export class MongoRegionsRepository implements GetRegionsData.IGetregionsData {
  async getRegions(): Promise<GetRegionsData.Result> {
    const regions = await RegionModel.find();

    return regions.map(region => MongoRegionMappers.toEntity(region));
  }
}
