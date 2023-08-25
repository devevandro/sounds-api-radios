import mongoose, { Schema } from 'mongoose';

export type IStateSchema = {
  id: string;
  name: string;
};

const stateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

stateSchema.set('toJSON', {
  transform(__: any, ret: any) {
    ret.id = ret._id;
    delete ret.__v;
    delete ret._id;
  },
});

export const StateModel = mongoose.connection
  .useDb('radios')
  .model<IStateSchema>('state', stateSchema);
