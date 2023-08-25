import IUseCase from '../../../../../core/IUseCase';
import { IGetUserChannelData } from '../../../data/get/getUserChannel/IGetUserChannelData';
import { UserChannelEntity } from '../../../entities/UserChannelEntity';
type ResponseDTO = {
    userChannel: UserChannelEntity;
};
export type RequestDTO = {
    userName: string;
    accessToken: string;
};
export declare class GetUserChannelUseCase implements IUseCase<RequestDTO, ResponseDTO> {
    private readonly getUserChannel;
    constructor(getUserChannel: IGetUserChannelData);
    execute({ userName, accessToken }: RequestDTO): Promise<ResponseDTO>;
}
export {};
