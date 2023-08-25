"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioModel = void 0;
const mongoose_1 = require("mongoose");
const radioSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
radioSchema.set('toJSON', {
    transform(__, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
    },
});
exports.RadioModel = mongoose_1.default.connection
    .useDb('radios')
    .model('radio', radioSchema);
//# sourceMappingURL=RadioModel.js.map