import IUseCase from '../../../../core/IUseCase';
import { IUserCreateData, Params } from '../../data/mongo/IUserCreateData';
import { UserEntity } from '../../entities/mongo/UserEntity';
export type RequestDTO = Params;
export type ResponseDTO = UserEntity;
export declare class CreateUserUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly postUser;
    constructor(postUser: IUserCreateData);
    execute(params: Params): Promise<ResponseDTO>;
}
