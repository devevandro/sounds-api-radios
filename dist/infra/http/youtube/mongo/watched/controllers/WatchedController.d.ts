import { WatchedDTO } from '../WatchedDTO';
import { WatchedFactory } from '../../../../../factories/youtube/mongo/WatchedFactory';
import { GetWatchedsFactory } from '../../../../../factories/youtube/mongo/GetWatchedsFactory';
export declare class GetWatchedsController {
    private readonly getWatchedRepository;
    constructor(getWatchedRepository: GetWatchedsFactory);
    getUser(userId: string): Promise<import("../../../../../../domain/youtube/data/mongo/IGetWatchedsData").Result>;
}
export declare class CreateWatchedController {
    private readonly watchedRepository;
    constructor(watchedRepository: WatchedFactory);
    createUser(body: WatchedDTO): Promise<import("../../../../../../domain/youtube/entities/mongo/WatchedEntity").WatchedEntity>;
}
