import * as UserCreateData from '../../../../domain/youtube/data/mongo/IUserCreateData';
import * as GetUserData from '../../../../domain/youtube/data/mongo/IGetUserData';
import { UserEntity } from '../../../../domain/youtube/entities/mongo/UserEntity';
export declare class MongoUserRepository implements UserCreateData.IUserCreateData, GetUserData.IGetUserData {
    getUser({ email }: GetUserData.RequestDTO): Promise<UserEntity>;
    createUser({ channelId, displayName, email, photoUrl, }: UserCreateData.Params): Promise<UserEntity>;
}
