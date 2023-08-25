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
exports.GetSugestedVideosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const GetSugestedVideosFactory_1 = require("../../../../../../factories/youtube/youtube-api/get/getSugestedVideos/GetSugestedVideosFactory");
let GetSugestedVideosController = class GetSugestedVideosController {
    constructor(sugestedVideosFactory) {
        this.sugestedVideosFactory = sugestedVideosFactory;
    }
    async getPlaylist(tags, accessToken) {
        const response = await this.sugestedVideosFactory.execute({
            tags,
            accessToken,
        });
        return response;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Sugested Videos' }),
    __param(0, (0, common_1.Query)('tags')),
    __param(1, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], GetSugestedVideosController.prototype, "getPlaylist", null);
GetSugestedVideosController = __decorate([
    (0, swagger_1.ApiTags)('SugestedVideos'),
    (0, common_1.Controller)('sugested-videos'),
    __metadata("design:paramtypes", [GetSugestedVideosFactory_1.GetSugestedVideosFactory])
], GetSugestedVideosController);
exports.GetSugestedVideosController = GetSugestedVideosController;
//# sourceMappingURL=GetSugestedVideosController.js.map