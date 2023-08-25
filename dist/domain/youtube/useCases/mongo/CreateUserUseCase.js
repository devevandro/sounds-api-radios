"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(postUser) {
        this.postUser = postUser;
    }
    async execute(params) {
        const user = await this.postUser.createUser(params);
        if (!user) {
            return null;
        }
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map