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
exports.GetVideoDetailFactory = void 0;
const common_1 = require("@nestjs/common");
const GetVideoDetailUseCase_1 = require("../../../../../domain/youtube/useCases/get/getVideoDetails/GetVideoDetailUseCase");
const injections_1 = require("../../../../../providers/injections");
let GetVideoDetailFactory = class GetVideoDetailFactory extends GetVideoDetailUseCase_1.GetVideoDetailUseCase {
    constructor(VideoDetailProvider) {
        super(VideoDetailProvider);
    }
};
GetVideoDetailFactory = __decorate([
    __param(0, (0, common_1.Inject)(injections_1.VIDEO_DETAIL)),
    __metadata("design:paramtypes", [Object])
], GetVideoDetailFactory);
exports.GetVideoDetailFactory = GetVideoDetailFactory;
//# sourceMappingURL=GetVideoDetailFactory.js.map