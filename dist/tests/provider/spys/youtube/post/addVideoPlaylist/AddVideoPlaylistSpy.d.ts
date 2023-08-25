import { IAddVideoPlaylistData, AddVideoPlaylistRequest, AddVideoPlaylistResponse } from '../../../../../../domain/youtube/data/post/postVideoPlaylist/IAddVideoPlaylistData';
export declare class AddVideoPlaylistSpy implements IAddVideoPlaylistData {
    params: AddVideoPlaylistRequest;
    result: AddVideoPlaylistResponse;
    addVideoPlaylist({ playlistId, videoId, accessToken, }: AddVideoPlaylistRequest): Promise<AddVideoPlaylistResponse>;
}
