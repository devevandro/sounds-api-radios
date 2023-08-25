import { IGetPlaylistsData, GetPlaylistsRequestDTO, GetPlaylistsRespondeDTO } from '../../../../../../domain/youtube/data/get/getPlaylists/IGetPlaylistsData';
export declare class GetPlaylistsSpy implements IGetPlaylistsData {
    params: GetPlaylistsRequestDTO;
    result: GetPlaylistsRespondeDTO;
    getPlaylists({ channelId, accessToken, }: GetPlaylistsRequestDTO): Promise<GetPlaylistsRespondeDTO>;
}
