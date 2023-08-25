type Item = {
    kind: string;
    etag: string;
    id: string;
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
};
export type PlaylistsEntity = {
    kind: string;
    etag: string;
    items: Item[];
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
};
export {};
