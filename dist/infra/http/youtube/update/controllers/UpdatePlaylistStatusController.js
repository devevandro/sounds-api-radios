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
exports.UpdatePlaylistStatusController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const UpdatePlaylistStatusFactory_1 = require("../../../../factories/youtube/update/UpdatePlaylistStatusFactory");
const UpdatePlaylistStatusDTO_1 = require("../UpdatePlaylistStatusDTO");
let UpdatePlaylistStatusController = class UpdatePlaylistStatusController {
    constructor(updatePlaylistStatusFactory) {
        this.updatePlaylistStatusFactory = updatePlaylistStatusFactory;
    }
    async createPlaylist({ newStatus, playlistId, accessToken, title }) {
        const response = await this.updatePlaylistStatusFactory.execute({
            newStatus,
            playlistId,
            accessToken,
            title,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Patch)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Update Playlist ' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePlaylistStatusDTO_1.UpdatePlaylistStatusDTO]),
    __metadata("design:returntype", Promise)
], UpdatePlaylistStatusController.prototype, "createPlaylist", null);
UpdatePlaylistStatusController = __decorate([
    (0, swagger_1.ApiTags)('UpdatePlaylist'),
    (0, common_1.Controller)('update-playlist-status'),
    __metadata("design:paramtypes", [UpdatePlaylistStatusFactory_1.UpdatePlaylistStatusFactory])
], UpdatePlaylistStatusController);
exports.UpdatePlaylistStatusController = UpdatePlaylistStatusController;
//# sourceMappingURL=UpdatePlaylistStatusController.js.map