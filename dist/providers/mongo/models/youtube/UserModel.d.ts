import mongoose, { Document } from 'mongoose';
export type IUserSchema = {
    id: string;
    displayName: string;
    email: string;
    photoUrl: string;
    channelId: string;
} & Document;
export declare const UserModel: mongoose.Model<IUserSchema, {}, {}, {}, mongoose.Document<unknown, {}, IUserSchema> & Omit<{
    id: string;
    displayName: string;
    email: string;
    photoUrl: string;
    channelId: string;
} & mongoose.Document<any, any, any> & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
