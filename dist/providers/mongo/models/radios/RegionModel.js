"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionModel = void 0;
const mongoose_1 = require("mongoose");
const regionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });
regionSchema.set('toJSON', {
    transform(__, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
    },
});
exports.RegionModel = mongoose_1.default.connection
    .useDb('radios')
    .model('region', regionSchema);
//# sourceMappingURL=RegionModel.js.map