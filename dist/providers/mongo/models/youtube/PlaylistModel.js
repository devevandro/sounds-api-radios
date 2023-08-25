"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistModel = void 0;
const mongoose_1 = require("mongoose");
const playlistSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    playlistId: {
        type: String,
        required: true,
    },
    playlistName: {
        type: String,
        required: true,
    },
}, { timestamps: true });
playlistSchema.set('toJSON', {
    transform(__, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
    },
});
exports.PlaylistModel = mongoose_1.default.connection
    .useDb('youtube')
    .model('playlistsShared', playlistSchema);
//# sourceMappingURL=PlaylistModel.js.map