import mongoose from 'mongoose';
export type IPlaylistSchema = {
    id: string;
    user: string;
    playlistId: string;
    playlistName: string;
};
export declare const PlaylistModel: mongoose.Model<IPlaylistSchema, {}, {}, {}, mongoose.Document<unknown, {}, IPlaylistSchema> & Omit<IPlaylistSchema & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
