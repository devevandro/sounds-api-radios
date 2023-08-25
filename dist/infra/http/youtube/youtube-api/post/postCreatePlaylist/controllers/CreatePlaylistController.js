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
exports.CreatePlaylistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const PostCreatePlaylistFactory_1 = require("../../../../../../factories/youtube/youtube-api/post/postCreatePlaylist/PostCreatePlaylistFactory");
let CreatePlaylistController = class CreatePlaylistController {
    constructor(createPlaylistFactory) {
        this.createPlaylistFactory = createPlaylistFactory;
    }
    async createPlaylist(title, description, channelId, accessToken) {
        const response = await this.createPlaylistFactory.execute({
            channelId,
            description,
            title,
            accessToken,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Post: Create Playlist ' }),
    __param(0, (0, common_1.Query)('title')),
    __param(1, (0, common_1.Query)('description')),
    __param(2, (0, common_1.Query)('channelId')),
    __param(3, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], CreatePlaylistController.prototype, "createPlaylist", null);
CreatePlaylistController = __decorate([
    (0, swagger_1.ApiTags)('CreatePlaylist'),
    (0, common_1.Controller)('create-playlist'),
    __metadata("design:paramtypes", [PostCreatePlaylistFactory_1.PostCreatePlaylistFactory])
], CreatePlaylistController);
exports.CreatePlaylistController = CreatePlaylistController;
//# sourceMappingURL=CreatePlaylistController.js.map