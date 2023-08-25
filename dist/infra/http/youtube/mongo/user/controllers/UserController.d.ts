import { UserFactory } from '../../../../../factories/youtube/mongo/UserFactory';
import { UserDTO } from '../UserDTO';
import { GetUserFactory } from '../../../../../factories/youtube/mongo/GetUserFactory';
export declare class UserController {
    private readonly userRepository;
    constructor(userRepository: UserFactory);
    createUser(body: UserDTO): Promise<import("../../../../../../domain/youtube/entities/mongo/UserEntity").UserEntity>;
}
export declare class GetUserController {
    private readonly getUserRepository;
    constructor(getUserRepository: GetUserFactory);
    getUser(email: string): Promise<import("../../../../../../domain/youtube/entities/mongo/UserEntity").UserEntity>;
}
