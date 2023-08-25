import { StateEntity } from '../../../domain/radios/entities/StateEntity';
import { IStateSchema } from '../models/StateModel';
export declare class MongoStateMappers {
    static toEntity(state: IStateSchema): StateEntity;
}
