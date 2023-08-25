import { UserEntity } from '../../../../domain/youtube/entities/mongo/UserEntity';
import { IUserSchema } from '../../models/youtube/UserModel';
export declare class MongoUserMappers {
    static toEntity(user: IUserSchema): UserEntity;
}
