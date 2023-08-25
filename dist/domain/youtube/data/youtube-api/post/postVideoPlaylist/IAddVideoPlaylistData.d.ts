import { AddVideoPlaylistEntity } from '../../../../entities/youtube-api/AddVideoPlaylistEntity';
export type AddVideoPlaylistResponse = {
    video: AddVideoPlaylistEntity;
};
export type AddVideoPlaylistRequest = {
    playlistId: string;
    videoId: string;
    accessToken: string;
};
export interface IAddVideoPlaylistData {
    addVideoPlaylist({ playlistId, videoId, accessToken, }: AddVideoPlaylistRequest): Promise<AddVideoPlaylistResponse>;
}
