import { Params, Result, IUserCreateData } from '../../../../../domain/youtube/data/mongo/IUserCreateData';
export declare class CreateUserSpy implements IUserCreateData {
    params: Params;
    result: Result;
    createUser({ channelId, displayName, email, photoUrl, }: Params): Promise<Result>;
}
