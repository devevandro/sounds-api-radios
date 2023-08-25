import IUseCase from '../../../../core/IUseCase';
import { IGetUserData } from '../../data/mongo/IGetUserData';
import { UserEntity } from '../../entities/mongo/UserEntity';
export type RequestDTO = {
    email: string;
};
export declare class GetUserUseCase implements IUseCase<RequestDTO, UserEntity> {
    private readonly getUser;
    constructor(getUser: IGetUserData);
    execute({ email }: RequestDTO): Promise<UserEntity>;
}
