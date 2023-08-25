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
exports.DeletePlaylistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const DeletePlaylistFactory_1 = require("../../../../../factories/youtube/delete/deletePlaylist/DeletePlaylistFactory");
let DeletePlaylistController = class DeletePlaylistController {
    constructor(deletePlaylistFactory) {
        this.deletePlaylistFactory = deletePlaylistFactory;
    }
    async createPlaylist(playlistId, accessToken) {
        const response = await this.deletePlaylistFactory.execute({
            playlistId,
            accessToken,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Delete)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete: Remove Playlist ' }),
    __param(0, (0, common_1.Query)('playlistId')),
    __param(1, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DeletePlaylistController.prototype, "createPlaylist", null);
DeletePlaylistController = __decorate([
    (0, swagger_1.ApiTags)('DeletePlaylist'),
    (0, common_1.Controller)('/delete-playlist'),
    __metadata("design:paramtypes", [DeletePlaylistFactory_1.DeletePlaylistFactory])
], DeletePlaylistController);
exports.DeletePlaylistController = DeletePlaylistController;
//# sourceMappingURL=DeletePlaylistController.js.map