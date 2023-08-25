import mongoose from 'mongoose';
export type IRegionSchema = {
    id: string;
    name: string;
};
export declare const RegionModel: mongoose.Model<IRegionSchema, {}, {}, {}, mongoose.Document<unknown, {}, IRegionSchema> & Omit<IRegionSchema & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
