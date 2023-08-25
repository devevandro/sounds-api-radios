import IUseCase from '../../../../../../core/IUseCase';
import { IGetUserChannelData } from '../../../../data/youtube-api/get/getUserChannel/IGetUserChannelData';
import { UserChannelEntity } from '../../../../entities/youtube-api/UserChannelEntity';
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
