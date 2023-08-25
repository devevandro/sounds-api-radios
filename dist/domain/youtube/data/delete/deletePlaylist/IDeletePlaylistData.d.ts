export type DeletePlaylistRequest = {
    playlistId: string;
    accessToken: string;
};
export interface IDeletePlaylistData {
    deletePlaylist({ playlistId, accessToken, }: DeletePlaylistRequest): Promise<boolean>;
}
