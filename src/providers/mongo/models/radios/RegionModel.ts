import mongoose, { Schema } from 'mongoose';

export type IRegionSchema = {
  id: string;
  name: string;
};

const regionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

regionSchema.set('toJSON', {
  transform(__: any, ret: any) {
    ret.id = ret._id;
    delete ret.__v;
    delete ret._id;
  },
});

export const RegionModel = mongoose.connection
  .useDb('radios')
  .model<IRegionSchema>('region', regionSchema);
