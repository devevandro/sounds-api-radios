import { DeletePlaylistRequest, IDeletePlaylistData } from '../../domain/youtube/data/youtube-api/delete/deletePlaylist/IDeletePlaylistData';
import { DeleteVideoPlaylistRequest, IDeleteVideoPlaylistData } from '../../domain/youtube/data/youtube-api/delete/deleteVideoPlaylist/IDeleteVideoPlaylistData';
import { GetPlaylistRequestDTO, IPlaylistData } from '../../domain/youtube/data/youtube-api/get/getPlaylist/IGetPlaylistData';
import { GetPlaylistsRequestDTO, IGetPlaylistsData } from '../../domain/youtube/data/youtube-api/get/getPlaylists/IGetPlaylistsData';
import { GetSugestedVideoRequestDTO, IGetSugestedVideosData } from '../../domain/youtube/data/youtube-api/get/getSugestedVideos/IGetSugestedVideosData';
import { GetUserChannelRequestDTO, IGetUserChannelData } from '../../domain/youtube/data/youtube-api/get/getUserChannel/IGetUserChannelData';
import { GetVideoDetailsRequestDTO, IGetVideoDetailData } from '../../domain/youtube/data/youtube-api/get/getVideoDetail/IGetVideoDetailData';
import { IRelatedVideosData, Params as ParamsRelated, Result as ResultRelated } from '../../domain/youtube/data/youtube-api/get/relatedVideos/IRelatedVideosData';
import { ISearchVideosData, SearchVideosRequest } from '../../domain/youtube/data/youtube-api/get/searchVideos/ISearchVideosData';
import { IPostCreatePlaylistData, PostCreatePlaylistRequest, PostCreatePlaylistResponse } from '../../domain/youtube/data/youtube-api/post/postCreatePlaylist/IPostCreatePlaylistData';
import { AddVideoPlaylistRequest, AddVideoPlaylistResponse, IAddVideoPlaylistData } from '../../domain/youtube/data/youtube-api/post/postVideoPlaylist/IAddVideoPlaylistData';
import { IUpdatePlaylistStatusData, Params, Result } from '../../domain/youtube/data/youtube-api/update/IUpdatePlaylistStatusData';
import { PlaylistEntity } from '../../domain/youtube/entities/youtube-api/PlaylistEntity';
import { PlaylistsEntity } from '../../domain/youtube/entities/youtube-api/PlaylistsEntity';
import { SearchVideosEntity } from '../../domain/youtube/entities/youtube-api/SearchVideosEntity';
import { VideosEntity } from '../../domain/youtube/entities/youtube-api/VideosEntity';
import { UserChannelEntity } from '../../domain/youtube/entities/youtube-api/UserChannelEntity';
import { VideoDetailEntity } from '../../domain/youtube/entities/youtube-api/VideoDetailEntity';
import { YoutubeBaseApi } from './YoutubeBaseApi';
export declare class YoutubeProvider extends YoutubeBaseApi implements IPlaylistData, ISearchVideosData, IGetVideoDetailData, IGetPlaylistsData, IGetUserChannelData, IGetSugestedVideosData, IPostCreatePlaylistData, IAddVideoPlaylistData, IDeletePlaylistData, IDeleteVideoPlaylistData, IUpdatePlaylistStatusData, IRelatedVideosData {
    getPlaylists({ channelId, accessToken, }: GetPlaylistsRequestDTO): Promise<{
        playlists: PlaylistsEntity;
    }>;
    getPlaylist({ playlistId, accessToken, }: GetPlaylistRequestDTO): Promise<PlaylistEntity>;
    getVideos({ videoName, accessToken, }: SearchVideosRequest): Promise<SearchVideosEntity>;
    getSugestedVideos({ tags, accessToken, }: GetSugestedVideoRequestDTO): Promise<VideosEntity>;
    getVideoDetail({ videoId, accessToken, }: GetVideoDetailsRequestDTO): Promise<VideoDetailEntity>;
    relatedVideos({ videoId, accessToken, }: ParamsRelated): Promise<ResultRelated>;
    getUserChannel({ userName, accessToken, }: GetUserChannelRequestDTO): Promise<{
        userChannel: UserChannelEntity;
    }>;
    createPlaylist({ channelId, description, title, accessToken, }: PostCreatePlaylistRequest): Promise<PostCreatePlaylistResponse>;
    addVideoPlaylist({ videoId, playlistId, accessToken, }: AddVideoPlaylistRequest): Promise<AddVideoPlaylistResponse>;
    deletePlaylist({ playlistId, accessToken, }: DeletePlaylistRequest): Promise<boolean>;
    deleteVideoPlaylist({ itemId, accessToken, }: DeleteVideoPlaylistRequest): Promise<boolean>;
    updatePlaylist({ newStatus, playlistId, title, accessToken, }: Params): Promise<Result>;
}
