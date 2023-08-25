import { GetUserChannelFactory } from '../../../../../../factories/youtube/youtube-api/get/getUserChannel/GetUserChannelFactory';
export declare class GetUserChannelController {
    private readonly userChannelProvider;
    constructor(userChannelProvider: GetUserChannelFactory);
    getUserChannel(userName: string, accessToken: string): Promise<{
        userChannel: import("../../../../../../../domain/youtube/entities/youtube-api/UserChannelEntity").UserChannelEntity;
    }>;
}
