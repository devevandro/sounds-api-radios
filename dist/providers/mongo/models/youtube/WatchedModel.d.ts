import mongoose from 'mongoose';
export type IWatchedSchema = {
    id: string;
    user: string;
    title: string;
    videoId: string;
    thumbnailUrl: string;
};
export declare const WatchedModel: mongoose.Model<IWatchedSchema, {}, {}, {}, mongoose.Document<unknown, {}, IWatchedSchema> & Omit<IWatchedSchema & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
