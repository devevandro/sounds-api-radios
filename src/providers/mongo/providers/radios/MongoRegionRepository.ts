import { mongo } from 'mongoose';
import * as GetRegionByIdData from '../../../../domain/radios/data/IGetRegionByIdData';
import { MongoRegionMappers } from '../../mappers/radios/MongoRegionMappers';
import { RegionModel } from '../../models/radios/RegionModel';

export class MongoRegionRepository
  implements GetRegionByIdData.IGetRegionByIdData
{
  async getRegionById({
    regionId,
  }: GetRegionByIdData.Params): Promise<GetRegionByIdData.Result> {
    const regionMongoId = new mongo.ObjectId(regionId);
    const region = await RegionModel.find({ _id: regionMongoId });

    return MongoRegionMappers.toEntity(region[0]);
  }
}
