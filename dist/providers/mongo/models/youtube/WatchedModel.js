"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchedModel = void 0;
const mongoose_1 = require("mongoose");
const watchedSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });
watchedSchema.set('toJSON', {
    transform(__, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
    },
});
exports.WatchedModel = mongoose_1.default.connection
    .useDb('youtube')
    .model('watched', watchedSchema);
//# sourceMappingURL=WatchedModel.js.map