import * as GetStatesData from '../../../../domain/radios/data/IGetStatesData';
import { MongoStateMappers } from '../../mappers/radios/MongoStateMappers';
import { StateModel } from '../../models/radios/StateModel';

export class MongoStatesRepository implements GetStatesData.IGetStatesData {
  async getStates(): Promise<GetStatesData.Result> {
    const states = await StateModel.find();

    return states.map(state => MongoStateMappers.toEntity(state));
  }
}
