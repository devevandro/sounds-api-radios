import { mongo } from 'mongoose';
import * as GetStateByIdData from '../../../../domain/radios/data/IGetStateByIdData';
import { MongoStateMappers } from '../../mappers/radios/MongoStateMappers';
import { StateModel } from '../../models/radios/StateModel';

export class MongoStateRepository
  implements GetStateByIdData.IGetStateByIdData
{
  async getStateById({
    stateId,
  }: GetStateByIdData.Params): Promise<GetStateByIdData.Result> {
    const stateMongoId = new mongo.ObjectId(stateId);
    const state = await StateModel.find({ _id: stateMongoId });

    return MongoStateMappers.toEntity(state[0]);
  }
}
