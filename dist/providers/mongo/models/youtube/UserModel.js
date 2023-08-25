"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    channelId: {
        type: String,
        required: true,
    },
}, { timestamps: true });
userSchema.set('toJSON', {
    transform(__, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
    },
});
exports.UserModel = mongoose_1.default.connection
    .useDb('youtube')
    .model('users', userSchema);
//# sourceMappingURL=UserModel.js.map