import { UserEntity } from '../../entities/mongo/UserEntity';
export type Params = {
    email: string;
    displayName: string;
    channelId: string;
    photoUrl: string;
};
export type Result = UserEntity;
export interface IUserCreateData {
    createUser({ channelId, photoUrl, displayName, email, }: Params): Promise<Result>;
}
