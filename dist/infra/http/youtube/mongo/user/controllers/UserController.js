"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const UserFactory_1 = require("../../../../../factories/youtube/mongo/UserFactory");
const UserDTO_1 = require("../UserDTO");
const GetUserFactory_1 = require("../../../../../factories/youtube/mongo/GetUserFactory");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(body) {
        const { channelId, displayName, email, photoUrl } = body;
        const response = await this.userRepository.execute({
            channelId,
            displayName,
            email,
            photoUrl,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Create user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDTO_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('create-user'),
    __metadata("design:paramtypes", [UserFactory_1.UserFactory])
], UserController);
exports.UserController = UserController;
let GetUserController = class GetUserController {
    constructor(getUserRepository) {
        this.getUserRepository = getUserRepository;
    }
    async getUser(email) {
        const response = await this.getUserRepository.execute({ email });
        return response;
    }
};
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Get User' }),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GetUserController.prototype, "getUser", null);
GetUserController = __decorate([
    (0, common_1.Controller)('get-user'),
    __metadata("design:paramtypes", [GetUserFactory_1.GetUserFactory])
], GetUserController);
exports.GetUserController = GetUserController;
//# sourceMappingURL=UserController.js.map