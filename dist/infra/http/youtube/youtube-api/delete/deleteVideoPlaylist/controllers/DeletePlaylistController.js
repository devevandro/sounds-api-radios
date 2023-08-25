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
exports.DeleteVideoPlaylistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const DeleteVideoPlaylistFactory_1 = require("../../../../../../factories/youtube/youtube-api/delete/deleteVideoPlaylist/DeleteVideoPlaylistFactory");
let DeleteVideoPlaylistController = class DeleteVideoPlaylistController {
    constructor(deleteVideoPlaylistFactory) {
        this.deleteVideoPlaylistFactory = deleteVideoPlaylistFactory;
    }
    async createPlaylist(itemId, accessToken) {
        const response = await this.deleteVideoPlaylistFactory.execute({
            itemId,
            accessToken,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Delete)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete: Remove Playlist ' }),
    __param(0, (0, common_1.Query)('itemId')),
    __param(1, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DeleteVideoPlaylistController.prototype, "createPlaylist", null);
DeleteVideoPlaylistController = __decorate([
    (0, swagger_1.ApiTags)('DeleteVideoPlaylist'),
    (0, common_1.Controller)('/delete-video-playlist'),
    __metadata("design:paramtypes", [DeleteVideoPlaylistFactory_1.DeleteVideoPlaylistFactory])
], DeleteVideoPlaylistController);
exports.DeleteVideoPlaylistController = DeleteVideoPlaylistController;
//# sourceMappingURL=DeletePlaylistController.js.map