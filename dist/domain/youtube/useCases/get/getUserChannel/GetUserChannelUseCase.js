"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserChannelUseCase = void 0;
class GetUserChannelUseCase {
    constructor(getUserChannel) {
        this.getUserChannel = getUserChannel;
    }
    async execute({ userName, accessToken }) {
        const userChannel = await this.getUserChannel.getUserChannel({
            userName,
            accessToken,
        });
        return userChannel;
    }
}
exports.GetUserChannelUseCase = GetUserChannelUseCase;
//# sourceMappingURL=GetUserChannelUseCase.js.map