import mongoose from 'mongoose';
export type IStateSchema = {
    id: string;
    name: string;
};
export declare const StateModel: mongoose.Model<IStateSchema, {}, {}, {}, mongoose.Document<unknown, {}, IStateSchema> & Omit<IStateSchema & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
