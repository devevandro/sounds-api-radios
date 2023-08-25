import { IGetUserChannelData, GetUserChannelRequestDTO, GetUserChannelRespondeDTO } from '../../../../../../domain/youtube/data/get/getUserChannel/IGetUserChannelData';
export declare class GetUserChannelSpy implements IGetUserChannelData {
    params: GetUserChannelRequestDTO;
    result: GetUserChannelRespondeDTO;
    getUserChannel({ userName, accessToken, }: GetUserChannelRequestDTO): Promise<GetUserChannelRespondeDTO>;
}
