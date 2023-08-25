import { GetUserUseCase } from '../../../../domain/youtube/useCases/mongo/GetUserUseCase';
import { IGetUserData } from '../../../../domain/youtube/data/mongo/IGetUserData';
export declare class GetUserFactory extends GetUserUseCase {
    constructor(getUserProvider: IGetUserData);
}
