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
exports.RadiosRegionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const GetRadiosByRegionFactory_1 = require("../../../../factories/radios/getRadioByRegion/GetRadiosByRegionFactory");
let RadiosRegionsController = class RadiosRegionsController {
    constructor(getRadiosRegionFactory) {
        this.getRadiosRegionFactory = getRadiosRegionFactory;
    }
    async getRadiosByRegion(regionId) {
        const response = await this.getRadiosRegionFactory.execute({ regionId });
        return response;
    }
};
__decorate([
    (0, common_1.Get)('/:regionId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Radios By Region' }),
    __param(0, (0, common_1.Param)('regionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RadiosRegionsController.prototype, "getRadiosByRegion", null);
RadiosRegionsController = __decorate([
    (0, swagger_1.ApiTags)('Radios'),
    (0, common_1.Controller)('radio-region'),
    __metadata("design:paramtypes", [GetRadiosByRegionFactory_1.GetRadiosByRegionFactory])
], RadiosRegionsController);
exports.RadiosRegionsController = RadiosRegionsController;
//# sourceMappingURL=RadiosRegionController.js.map