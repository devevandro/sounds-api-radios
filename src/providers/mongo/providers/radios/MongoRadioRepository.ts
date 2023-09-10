import { mongo } from 'mongoose';
import * as GetRadiosByRegionData from '../../../../domain/radios/data/IGetRadiosByRegionData';
import * as GetRadiosByStateData from '../../../../domain/radios/data/IGetRadiosByStateData';
import { MongoRadioMappers } from '../../mappers/radios/MongoRadioMappers';
import { RadioModel } from '../../models/radios/RadioModel';

export class MongoRadioRepository
  implements
    GetRadiosByRegionData.IGetRadiosByRegionData,
    GetRadiosByStateData.IGetRadiosByStateData
{
  async getRadiosByRegion({
    regionId,
  }: GetRadiosByRegionData.Params): Promise<GetRadiosByRegionData.Result> {
    const regionMongoId = new mongo.ObjectId(regionId);
    const radios = await RadioModel.aggregate([
      {
        $match: {
          region: regionMongoId,
        },
      },
      {
        $lookup: {
          from: 'regions',
          localField: 'region',
          foreignField: '_id',
          as: 'region',
        },
      },
      {
        $lookup: {
          from: 'states',
          localField: 'state',
          foreignField: '_id',
          as: 'state',
        },
      },
      {
        $unwind: {
          path: '$region',
        },
      },
      {
        $unwind: {
          path: '$state',
        },
      },
      {
        $project: {
          id: '$_id',
          name: 1,
          city: 1,
          state: '$state.name',
          url: 1,
          img: 1,
          region: '$region.name',
          isFavorite: 1,
        },
      },
    ]);

    return radios.map(radio => MongoRadioMappers.toEntity(radio));
  }

  async getRadiosByState({
    stateId,
  }: GetRadiosByStateData.Params): Promise<GetRadiosByStateData.Result> {
    const regionMongoId = new mongo.ObjectId(stateId);
    const radios = await RadioModel.aggregate([
      {
        $match: {
          state: regionMongoId,
        },
      },
      {
        $lookup: {
          from: 'regions',
          localField: 'region',
          foreignField: '_id',
          as: 'region',
        },
      },
      {
        $lookup: {
          from: 'states',
          localField: 'state',
          foreignField: '_id',
          as: 'state',
        },
      },
      {
        $unwind: {
          path: '$region',
        },
      },
      {
        $unwind: {
          path: '$state',
        },
      },
      {
        $project: {
          id: '$_id',
          name: 1,
          city: 1,
          state: '$state.name',
          url: 1,
          img: 1,
          region: '$region.name',
          isFavorite: 1,
        },
      },
    ]);

    return radios.map(radio => MongoRadioMappers.toEntity(radio));
  }
}
