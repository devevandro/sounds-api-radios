export type VideosEntity = {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: [
        {
            kind: string;
            etag: string;
            id: {
                videoId: string;
                kind: string;
            };
            snippet: {
                publishedAt: string;
                channelId: string;
                title: string;
                description: string;
                thumbnails: {
                    default: {
                        url: string;
                        width: number;
                        height: number;
                    };
                    medium: {
                        url: string;
                        width: number;
                        height: number;
                    };
                    high: {
                        url: string;
                        width: number;
                        height: number;
                    };
                };
                channelTitle: string;
                localized: {
                    title: string;
                    description: string;
                };
            };
        }
    ];
};
