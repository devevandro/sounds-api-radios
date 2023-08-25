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
exports.CreateWatchedController = exports.GetWatchedsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const WatchedDTO_1 = require("../WatchedDTO");
const WatchedFactory_1 = require("../../../../../factories/youtube/mongo/WatchedFactory");
const GetWatchedsFactory_1 = require("../../../../../factories/youtube/mongo/GetWatchedsFactory");
let GetWatchedsController = class GetWatchedsController {
    constructor(getWatchedRepository) {
        this.getWatchedRepository = getWatchedRepository;
    }
    async getUser(userId) {
        const response = await this.getWatchedRepository.execute({
            userId,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Get Playlists' }),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GetWatchedsController.prototype, "getUser", null);
GetWatchedsController = __decorate([
    (0, swagger_1.ApiTags)('Watched'),
    (0, common_1.Controller)('get-watcheds'),
    __metadata("design:paramtypes", [GetWatchedsFactory_1.GetWatchedsFactory])
], GetWatchedsController);
exports.GetWatchedsController = GetWatchedsController;
let CreateWatchedController = class CreateWatchedController {
    constructor(watchedRepository) {
        this.watchedRepository = watchedRepository;
    }
    async createUser(body) {
        const { user, videoId, title, thumbnailUrl } = body;
        const response = await this.watchedRepository.execute({
            user,
            videoId,
            title,
            thumbnailUrl,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Create Watched' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WatchedDTO_1.WatchedDTO]),
    __metadata("design:returntype", Promise)
], CreateWatchedController.prototype, "createUser", null);
CreateWatchedController = __decorate([
    (0, common_1.Controller)('create-watched'),
    __metadata("design:paramtypes", [WatchedFactory_1.WatchedFactory])
], CreateWatchedController);
exports.CreateWatchedController = CreateWatchedController;
//# sourceMappingURL=WatchedController.js.map