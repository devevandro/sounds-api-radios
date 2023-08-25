export type DeleteVideoPlaylistRequest = {
    itemId: string;
    accessToken: string;
};
export interface IDeleteVideoPlaylistData {
    deleteVideoPlaylist({ itemId, accessToken, }: DeleteVideoPlaylistRequest): Promise<boolean>;
}
