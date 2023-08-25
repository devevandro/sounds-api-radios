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
exports.GetWatchedsFactory = void 0;
const common_1 = require("@nestjs/common");
const injections_1 = require("../../../../providers/injections");
const GetWatchedsUseCase_1 = require("../../../../domain/youtube/useCases/mongo/GetWatchedsUseCase");
let GetWatchedsFactory = class GetWatchedsFactory extends GetWatchedsUseCase_1.GetWatchedUseCase {
    constructor(watchedProvider) {
        super(watchedProvider);
    }
};
GetWatchedsFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(injections_1.WATCHED)),
    __metadata("design:paramtypes", [Object])
], GetWatchedsFactory);
exports.GetWatchedsFactory = GetWatchedsFactory;
//# sourceMappingURL=GetWatchedsFactory.js.map