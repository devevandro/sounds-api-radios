import { MongoRadioRepository } from './mongo/providers/radios/MongoRadioRepository';
import { MongoRegionRepository } from './mongo/providers/radios/MongoRegionRepository';
import { MongoRegionsRepository } from './mongo/providers/radios/MongoRegionsRepository';
import { MongoStateRepository } from './mongo/providers/radios/MongoStateRepository';
import { MongoStatesRepository } from './mongo/providers/radios/MongoStatesRepository';
export declare const RADIOS_REGION = "radiosRegionProvider,";
export declare const radiosRegionProvider: {
    provide: string;
    useFactory: () => MongoRadioRepository;
};
export declare const STATES = "stateProvider,";
export declare const stateProvider: {
    provide: string;
    useFactory: () => MongoStateRepository;
};
export declare const ALL_STATES = "allStateProvider,";
export declare const allStateProvider: {
    provide: string;
    useFactory: () => MongoStatesRepository;
};
export declare const REGION = "regionProvider,";
export declare const regionProvider: {
    provide: string;
    useFactory: () => MongoRegionRepository;
};
export declare const ALL_REGIONS = "allRegionProvider,";
export declare const allRegionProvider: {
    provide: string;
    useFactory: () => MongoRegionsRepository;
};
