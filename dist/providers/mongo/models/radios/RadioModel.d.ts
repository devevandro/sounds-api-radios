import mongoose from 'mongoose';
export type IRadioSchema = {
    id: string;
    name: string;
    city: string;
    state: string;
    url: string;
    img: string;
    region: string;
    isFavorite: boolean;
};
export declare const RadioModel: mongoose.Model<IRadioSchema, {}, {}, {}, mongoose.Document<unknown, {}, IRadioSchema> & Omit<IRadioSchema & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
