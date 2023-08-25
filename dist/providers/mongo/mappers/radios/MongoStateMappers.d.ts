import { StateEntity } from '../../../../domain/radios/entities/StateEntity';
import { IStateSchema } from '../../models/radios/StateModel';
export declare class MongoStateMappers {
    static toEntity(state: IStateSchema): StateEntity;
}
