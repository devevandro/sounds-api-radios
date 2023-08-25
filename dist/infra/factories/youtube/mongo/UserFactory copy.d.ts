import { CreateUserUseCase } from '../../../../domain/youtube/useCases/mongo/CreateUserUseCase';
import { IUserCreateData } from '../../../../domain/youtube/data/mongo/IUserCreateData';
export declare class UserFactory extends CreateUserUseCase {
    constructor(userProvider: IUserCreateData);
}
