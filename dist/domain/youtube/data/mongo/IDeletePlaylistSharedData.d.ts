export type Params = {
    userId: string;
    playlistId: string;
};
export interface IDeletePlaylistSharedData {
    deletePlaylistShared({ userId, playlistId }: Params): Promise<number>;
}
