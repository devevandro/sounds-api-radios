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
exports.SearchVideosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const SearchVideosFactory_1 = require("../../../../../../factories/youtube/youtube-api/get/searchVideos/SearchVideosFactory");
let SearchVideosController = class SearchVideosController {
    constructor(searchPlaylistFactory) {
        this.searchPlaylistFactory = searchPlaylistFactory;
    }
    async getVideos(videoName, accessToken) {
        const response = await this.searchPlaylistFactory.execute({
            videoName,
            accessToken,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Search Videos' }),
    __param(0, (0, common_1.Query)('videoName')),
    __param(1, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SearchVideosController.prototype, "getVideos", null);
SearchVideosController = __decorate([
    (0, swagger_1.ApiTags)('Search'),
    (0, common_1.Controller)('search-videos'),
    __metadata("design:paramtypes", [SearchVideosFactory_1.SearchVideosFactory])
], SearchVideosController);
exports.SearchVideosController = SearchVideosController;
//# sourceMappingURL=SearchVideosController.js.map