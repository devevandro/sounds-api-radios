import { UserEntity } from '../../entities/mongo/UserEntity';
export type RequestDTO = {
    email: string;
};
export interface IGetUserData {
    getUser({ email }: RequestDTO): Promise<UserEntity>;
}
