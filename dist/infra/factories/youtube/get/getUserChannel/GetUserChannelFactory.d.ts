import { IGetUserChannelData } from '../../../../../domain/youtube/data/get/getUserChannel/IGetUserChannelData';
import { GetUserChannelUseCase } from '../../../../../domain/youtube/useCases/get/getUserChannel/GetUserChannelUseCase';
export declare class GetUserChannelFactory extends GetUserChannelUseCase {
    constructor(userChannelProvider: IGetUserChannelData);
}
