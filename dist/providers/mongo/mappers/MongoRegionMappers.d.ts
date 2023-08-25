import { RegionEntity } from '../../../domain/radios/entities/RegionEntity';
import { IRegionSchema } from '../models/RegionModel';
export declare class MongoRegionMappers {
    static toEntity(region: IRegionSchema): RegionEntity;
}
