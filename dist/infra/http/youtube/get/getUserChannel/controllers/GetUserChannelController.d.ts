import { GetUserChannelFactory } from '../../../../../factories/youtube/get/getUserChannel/GetUserChannelFactory';
export declare class GetUserChannelController {
    private readonly userChannelProvider;
    constructor(userChannelProvider: GetUserChannelFactory);
    getUserChannel(userName: string, accessToken: string): Promise<{
        userChannel: import("../../../../../../domain/youtube/entities/UserChannelEntity").UserChannelEntity;
    }>;
}
