"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUseCase = void 0;
class GetUserUseCase {
    constructor(getUser) {
        this.getUser = getUser;
    }
    async execute({ email }) {
        const user = await this.getUser.getUser({ email });
        if (!user) {
            return null;
        }
        return user;
    }
}
exports.GetUserUseCase = GetUserUseCase;
//# sourceMappingURL=GetUserUseCase.js.map