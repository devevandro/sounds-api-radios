"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRegionProvider = exports.ALL_REGIONS = exports.regionProvider = exports.REGION = exports.allStateProvider = exports.ALL_STATES = exports.stateProvider = exports.STATES = exports.radiosRegionProvider = exports.RADIOS_REGION = void 0;
const MongoRadioRepository_1 = require("./mongo/providers/radios/MongoRadioRepository");
const MongoRegionRepository_1 = require("./mongo/providers/radios/MongoRegionRepository");
const MongoRegionsRepository_1 = require("./mongo/providers/radios/MongoRegionsRepository");
const MongoStateRepository_1 = require("./mongo/providers/radios/MongoStateRepository");
const MongoStatesRepository_1 = require("./mongo/providers/radios/MongoStatesRepository");
exports.RADIOS_REGION = 'radiosRegionProvider,';
exports.radiosRegionProvider = {
    provide: exports.RADIOS_REGION,
    useFactory: () => {
        return new MongoRadioRepository_1.MongoRadioRepository();
    },
};
exports.STATES = 'stateProvider,';
exports.stateProvider = {
    provide: exports.STATES,
    useFactory: () => {
        return new MongoStateRepository_1.MongoStateRepository();
    },
};
exports.ALL_STATES = 'allStateProvider,';
exports.allStateProvider = {
    provide: exports.ALL_STATES,
    useFactory: () => {
        return new MongoStatesRepository_1.MongoStatesRepository();
    },
};
exports.REGION = 'regionProvider,';
exports.regionProvider = {
    provide: exports.REGION,
    useFactory: () => {
        return new MongoRegionRepository_1.MongoRegionRepository();
    },
};
exports.ALL_REGIONS = 'allRegionProvider,';
exports.allRegionProvider = {
    provide: exports.ALL_REGIONS,
    useFactory: () => {
        return new MongoRegionsRepository_1.MongoRegionsRepository();
    },
};
//# sourceMappingURL=injections.js.map