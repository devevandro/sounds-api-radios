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
exports.ConverterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ConverterFactory_1 = require("../../../../factories/youtube/mp3-converter/ConverterFactory");
let ConverterController = class ConverterController {
    constructor(converterFactory) {
        this.converterFactory = converterFactory;
    }
    async converterToMP3(videoId) {
        await this.converterFactory.execute({ videoId });
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Converter Music to MP3' }),
    __param(0, (0, common_1.Query)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConverterController.prototype, "converterToMP3", null);
ConverterController = __decorate([
    (0, swagger_1.ApiTags)('Converter'),
    (0, common_1.Controller)('converter-to-mp3'),
    __metadata("design:paramtypes", [ConverterFactory_1.ConverterFactory])
], ConverterController);
exports.ConverterController = ConverterController;
//# sourceMappingURL=ConverterController.js.map