import { RadioEntity } from '../../../../domain/radios/entities/RadioEntity';
import { IRadioSchema } from '../../models/radios/RadioModel';

export class MongoRadioMappers {
  static toEntity(radio: IRadioSchema): RadioEntity {
    return {
      id: radio.id,
      name: radio.name,
      img: radio.img,
      state: radio.state,
      region: radio.region,
      city: radio.city,
      isFavorite: radio.isFavorite,
      url: radio.url,
    };
  }
}
