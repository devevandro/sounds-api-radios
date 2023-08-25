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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const GetRegionsFactory_1 = require("../../../../factories/radios/getRegions/GetRegionsFactory");
let RegionsController = class RegionsController {
    constructor(getRegionsFactory) {
        this.getRegionsFactory = getRegionsFactory;
    }
    async getRegions() {
        const response = await this.getRegionsFactory.execute();
        return response;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Get All Regions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "getRegions", null);
RegionsController = __decorate([
    (0, swagger_1.ApiTags)('Radios'),
    (0, common_1.Controller)('regions'),
    __metadata("design:paramtypes", [GetRegionsFactory_1.GetRegionsFactory])
], RegionsController);
exports.RegionsController = RegionsController;
//# sourceMappingURL=RegionsController.js.map