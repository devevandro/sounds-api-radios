import { GetPlaylistsSharedFactory } from '../../../../../factories/youtube/mongo/GetPlaylistsFactory';
import { GetPlaylistSharedFactory } from '../../../../../factories/youtube/mongo/GetPlaylistFactory';
import { DeletePlaylistSharedFactory } from '../../../../../factories/youtube/mongo/DeletePlaylistFactory';
import { CreatePlaylistFactory } from '../../../../../factories/youtube/mongo/CreatePlaylistFactory';
import { PlaylistDTO } from '../PlaylistDTO';
export declare class GetPlaylistsController {
    private readonly getPlaylistRepository;
    constructor(getPlaylistRepository: GetPlaylistsSharedFactory);
    getUser(userId: string): Promise<import("../../../../../../domain/youtube/entities/mongo/PlaylistSharedEntity").PlaylistSharedEntity[]>;
}
export declare class GetPlaylistController {
    private readonly getPlaylistRepository;
    constructor(getPlaylistRepository: GetPlaylistSharedFactory);
    getUser(userId: string, playlistId: string): Promise<import("../../../../../../domain/youtube/entities/mongo/PlaylistSharedEntity").PlaylistSharedEntity>;
}
export declare class CreatePlaylistSharedController {
    private readonly userRepository;
    constructor(userRepository: CreatePlaylistFactory);
    createUser(body: PlaylistDTO): Promise<import("../../../../../../domain/youtube/entities/mongo/PlaylistSharedEntity").PlaylistSharedEntity>;
}
export declare class DeletePlaylistSharedController {
    private readonly deletePlaylistRepository;
    constructor(deletePlaylistRepository: DeletePlaylistSharedFactory);
    deletePlaylistShared(userId: string, playlistId: string): Promise<boolean>;
}
