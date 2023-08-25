import mongoose, { Schema } from 'mongoose';

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

const radioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

radioSchema.set('toJSON', {
  transform(__: any, ret: any) {
    ret.id = ret._id;
    delete ret.__v;
    delete ret._id;
  },
});

export const RadioModel = mongoose.connection
  .useDb('radios')
  .model<IRadioSchema>('radio', radioSchema);
