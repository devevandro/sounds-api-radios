"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateModel = void 0;
const mongoose_1 = require("mongoose");
const stateSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });
stateSchema.set('toJSON', {
    transform(__, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
    },
});
exports.StateModel = mongoose_1.default.connection
    .useDb('radios')
    .model('state', stateSchema);
//# sourceMappingURL=StateModel.js.map