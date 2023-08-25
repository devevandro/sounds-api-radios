import { IGetUserChannelData, GetUserChannelRequestDTO, GetUserChannelRespondeDTO } from '../../../../../../../domain/youtube/data/youtube-api/get/getUserChannel/IGetUserChannelData';
export declare class GetUserChannelSpy implements IGetUserChannelData {
    params: GetUserChannelRequestDTO;
    result: GetUserChannelRespondeDTO;
    getUserChannel({ userName, accessToken, }: GetUserChannelRequestDTO): Promise<GetUserChannelRespondeDTO>;
}
