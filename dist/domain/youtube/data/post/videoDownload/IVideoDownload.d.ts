export type VideoDownloadResquest = {
    videoUrl: string;
};
export interface IVideoDownload {
    videoDownload({ videoUrl }: VideoDownloadResquest): Promise<boolean>;
}
