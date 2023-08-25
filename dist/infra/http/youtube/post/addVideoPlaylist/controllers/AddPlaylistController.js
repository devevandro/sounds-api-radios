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
exports.AddVideoPlaylistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const AddVideoPlaylistFactory_1 = require("../../../../../factories/youtube/post/postVideoPlaylist/AddVideoPlaylistFactory");
let AddVideoPlaylistController = class AddVideoPlaylistController {
    constructor(addVideoPlaylistFactory) {
        this.addVideoPlaylistFactory = addVideoPlaylistFactory;
    }
    async createPlaylist(videoId, playlistId, accessToken) {
        const response = await this.addVideoPlaylistFactory.execute({
            videoId,
            playlistId,
            accessToken,
        });
        console.log('aqui', response);
        return response;
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Post: Add a Video on Playlist ' }),
    __param(0, (0, common_1.Query)('videoId')),
    __param(1, (0, common_1.Query)('playlistId')),
    __param(2, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AddVideoPlaylistController.prototype, "createPlaylist", null);
AddVideoPlaylistController = __decorate([
    (0, swagger_1.ApiTags)('AddVideoPlaylist'),
    (0, common_1.Controller)('add-video-playlist'),
    __metadata("design:paramtypes", [AddVideoPlaylistFactory_1.AddVideoPlaylistFactory])
], AddVideoPlaylistController);
exports.AddVideoPlaylistController = AddVideoPlaylistController;
//# sourceMappingURL=AddPlaylistController.js.map