import { UserChannelEntity } from '../../../entities/UserChannelEntity';
export type GetUserChannelRespondeDTO = {
    userChannel: UserChannelEntity;
};
export type GetUserChannelRequestDTO = {
    userName: string;
    accessToken: string;
};
export interface IGetUserChannelData {
    getUserChannel({ userName, accessToken, }: GetUserChannelRequestDTO): Promise<GetUserChannelRespondeDTO>;
}
