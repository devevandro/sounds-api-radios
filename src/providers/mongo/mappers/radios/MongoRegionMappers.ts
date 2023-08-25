import { RegionEntity } from '../../../../domain/radios/entities/RegionEntity';
import { IRegionSchema } from '../../models/radios/RegionModel';

export class MongoRegionMappers {
  static toEntity(region: IRegionSchema): RegionEntity {
    return {
      id: region.id,
      name: region.name,
    };
  }
}
