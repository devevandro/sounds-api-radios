import { StateEntity } from '../../../../domain/radios/entities/StateEntity';
import { IStateSchema } from '../../models/radios/StateModel';

export class MongoStateMappers {
  static toEntity(state: IStateSchema): StateEntity {
    return {
      id: state.id,
      name: state.name,
    };
  }
}
