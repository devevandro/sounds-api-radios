import { RadioEntity } from '../../../domain/radios/entities/RadioEntity';
import { IRadioSchema } from '../models/RadioModel';
export declare class MongoRadioMappers {
    static toEntity(radio: IRadioSchema): RadioEntity;
}
