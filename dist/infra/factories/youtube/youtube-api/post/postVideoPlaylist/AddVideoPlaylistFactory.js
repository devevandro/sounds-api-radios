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
exports.AddVideoPlaylistFactory = void 0;
const common_1 = require("@nestjs/common");
const injections_1 = require("../../../../../../providers/injections");
const AddVideoPlaylistUseCase_1 = require("../../../../../../domain/youtube/useCases/youtube-api/post/postVideoPlaylist/AddVideoPlaylistUseCase");
let AddVideoPlaylistFactory = class AddVideoPlaylistFactory extends AddVideoPlaylistUseCase_1.AddVideoPlaylistUseCase {
    constructor(addVideoPlaylistProvider, getPlaylistProvider) {
        super(addVideoPlaylistProvider, getPlaylistProvider);
    }
};
AddVideoPlaylistFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(injections_1.ADD_VIDEO_PLAYLIST_PROVIDER)),
    __param(1, (0, common_1.Inject)(injections_1.PLAYLIST_PROVIDER)),
    __metadata("design:paramtypes", [Object, Object])
], AddVideoPlaylistFactory);
exports.AddVideoPlaylistFactory = AddVideoPlaylistFactory;
//# sourceMappingURL=AddVideoPlaylistFactory.js.map