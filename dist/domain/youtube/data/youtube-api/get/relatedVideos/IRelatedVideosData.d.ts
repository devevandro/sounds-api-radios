import { VideosEntity } from '../../../../entities/youtube-api/VideosEntity';
export type Params = {
    videoId: string;
    accessToken: string;
};
export type Result = VideosEntity;
export interface IRelatedVideosData {
    relatedVideos(params: Params): Promise<Result>;
}
