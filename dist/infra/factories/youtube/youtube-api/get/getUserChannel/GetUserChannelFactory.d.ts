import { GetUserChannelUseCase } from '../../../../../../domain/youtube/useCases/youtube-api/get/getUserChannel/GetUserChannelUseCase';
import { IGetUserChannelData } from '../../../../../../domain/youtube/data/youtube-api/get/getUserChannel/IGetUserChannelData';
export declare class GetUserChannelFactory extends GetUserChannelUseCase {
    constructor(userChannelProvider: IGetUserChannelData);
}
