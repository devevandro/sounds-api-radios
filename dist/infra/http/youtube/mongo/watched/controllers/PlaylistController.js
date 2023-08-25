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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlaylistSharedController = exports.CreatePlaylistSharedController = exports.GetPlaylistController = exports.GetPlaylistsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const GetPlaylistsFactory_1 = require("../../../../../factories/youtube/mongo/GetPlaylistsFactory");
const GetPlaylistFactory_1 = require("../../../../../factories/youtube/mongo/GetPlaylistFactory");
const DeletePlaylistFactory_1 = require("../../../../../factories/youtube/mongo/DeletePlaylistFactory");
const CreatePlaylistFactory_1 = require("../../../../../factories/youtube/mongo/CreatePlaylistFactory");
const PlaylistDTO_1 = require("../PlaylistDTO");
let GetPlaylistsController = class GetPlaylistsController {
    constructor(getPlaylistRepository) {
        this.getPlaylistRepository = getPlaylistRepository;
    }
    async getUser(userId) {
        const response = await this.getPlaylistRepository.execute({
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
], GetPlaylistsController.prototype, "getUser", null);
GetPlaylistsController = __decorate([
    (0, swagger_1.ApiTags)('PlaylistShared'),
    (0, common_1.Controller)('get-playlists-shared'),
    __metadata("design:paramtypes", [GetPlaylistsFactory_1.GetPlaylistsSharedFactory])
], GetPlaylistsController);
exports.GetPlaylistsController = GetPlaylistsController;
let GetPlaylistController = class GetPlaylistController {
    constructor(getPlaylistRepository) {
        this.getPlaylistRepository = getPlaylistRepository;
    }
    async getUser(userId, playlistId) {
        const response = await this.getPlaylistRepository.execute({
            userId,
            playlistId,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Get Playlist' }),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)('playlistId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GetPlaylistController.prototype, "getUser", null);
GetPlaylistController = __decorate([
    (0, common_1.Controller)('get-playlist-shared'),
    __metadata("design:paramtypes", [GetPlaylistFactory_1.GetPlaylistSharedFactory])
], GetPlaylistController);
exports.GetPlaylistController = GetPlaylistController;
let CreatePlaylistSharedController = class CreatePlaylistSharedController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(body) {
        const { user, playlistId, playlistName } = body;
        const response = await this.userRepository.execute({
            userId: user,
            playlistId,
            playlistName,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Create Playlist' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof PlaylistDTO_1.PlaylistDTO !== "undefined" && PlaylistDTO_1.PlaylistDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CreatePlaylistSharedController.prototype, "createUser", null);
CreatePlaylistSharedController = __decorate([
    (0, common_1.Controller)('create-playlist-shared'),
    __metadata("design:paramtypes", [CreatePlaylistFactory_1.CreatePlaylistFactory])
], CreatePlaylistSharedController);
exports.CreatePlaylistSharedController = CreatePlaylistSharedController;
let DeletePlaylistSharedController = class DeletePlaylistSharedController {
    constructor(deletePlaylistRepository) {
        this.deletePlaylistRepository = deletePlaylistRepository;
    }
    async deletePlaylistShared(userId, playlistId) {
        await this.deletePlaylistRepository.execute({ userId, playlistId });
        return true;
    }
};
__decorate([
    (0, common_1.Delete)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Delete playlist' }),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)('playlistId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DeletePlaylistSharedController.prototype, "deletePlaylistShared", null);
DeletePlaylistSharedController = __decorate([
    (0, common_1.Controller)('delete-playlist-shared'),
    __metadata("design:paramtypes", [DeletePlaylistFactory_1.DeletePlaylistSharedFactory])
], DeletePlaylistSharedController);
exports.DeletePlaylistSharedController = DeletePlaylistSharedController;
//# sourceMappingURL=PlaylistController.js.map