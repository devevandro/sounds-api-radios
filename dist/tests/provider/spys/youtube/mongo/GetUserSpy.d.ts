import { IGetUserData, RequestDTO } from '../../../../../domain/youtube/data/mongo/IGetUserData';
import { UserEntity } from '../../../../../domain/youtube/entities/mongo/UserEntity';
export declare class GetUserSpy implements IGetUserData {
    params: RequestDTO;
    result: UserEntity;
    getUser({ email }: RequestDTO): Promise<UserEntity>;
}
