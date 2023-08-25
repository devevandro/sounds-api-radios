import { RadioEntity } from '../../../../domain/radios/entities/RadioEntity';
import { IRadioSchema } from '../../models/radios/RadioModel';
export declare class MongoRadioMappers {
    static toEntity(radio: IRadioSchema): RadioEntity;
}
