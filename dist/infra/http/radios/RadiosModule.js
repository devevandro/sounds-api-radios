"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioModule = void 0;
const common_1 = require("@nestjs/common");
const GetRadiosByRegionFactory_1 = require("../../factories/radios/getRadioByRegion/GetRadiosByRegionFactory");
const injections_1 = require("../../../providers/injections");
const RadiosRegionController_1 = require("./getRadiosRegion/controllers/RadiosRegionController");
const StateByIdController_1 = require("./getStateById/controllers/StateByIdController");
const GetStateByIdFactory_1 = require("../../factories/radios/getStateById/GetStateByIdFactory");
const GetStatesFactory_1 = require("../../factories/radios/getStates/GetStatesFactory");
const StatesController_1 = require("./getStates/controllers/StatesController");
const RegionsController_1 = require("./getRegions/controllers/RegionsController");
const GetRegionsFactory_1 = require("../../factories/radios/getRegions/GetRegionsFactory");
const GetRegionByIdFactory_1 = require("../../factories/radios/getRegionById/GetRegionByIdFactory");
const RegionByIdController_1 = require("./getRegionById/controllers/RegionByIdController");
let RadioModule = class RadioModule {
};
RadioModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            RadiosRegionController_1.RadiosRegionsController,
            RegionByIdController_1.RegionByIdController,
            RegionsController_1.RegionsController,
            StateByIdController_1.StateByIdController,
            StatesController_1.StatesController,
        ],
        providers: [
            GetRadiosByRegionFactory_1.GetRadiosByRegionFactory,
            injections_1.radiosRegionProvider,
            GetRegionByIdFactory_1.GetRegionByIdFactory,
            injections_1.regionProvider,
            GetRegionsFactory_1.GetRegionsFactory,
            injections_1.allRegionProvider,
            GetStateByIdFactory_1.GetStateByIdFactory,
            injections_1.stateProvider,
            GetStatesFactory_1.GetStatesFactory,
            injections_1.allStateProvider,
        ],
    })
], RadioModule);
exports.RadioModule = RadioModule;
//# sourceMappingURL=RadiosModule.js.map