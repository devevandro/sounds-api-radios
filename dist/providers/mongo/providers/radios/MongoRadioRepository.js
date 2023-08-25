"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRadioRepository = void 0;
const mongoose_1 = require("mongoose");
const MongoRadioMappers_1 = require("../../mappers/radios/MongoRadioMappers");
const RadioModel_1 = require("../../models/radios/RadioModel");
class MongoRadioRepository {
    async getRadiosByRegion({ regionId, }) {
        const regionMongoId = new mongoose_1.mongo.ObjectId(regionId);
        const radios = await RadioModel_1.RadioModel.aggregate([
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
        return radios.map(radio => MongoRadioMappers_1.MongoRadioMappers.toEntity(radio));
    }
}
exports.MongoRadioRepository = MongoRadioRepository;
//# sourceMappingURL=MongoRadioRepository.js.map