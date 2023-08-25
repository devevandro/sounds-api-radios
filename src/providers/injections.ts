import { MongoRadioRepository } from './mongo/providers/radios/MongoRadioRepository';
import { MongoRegionRepository } from './mongo/providers/radios/MongoRegionRepository';
import { MongoRegionsRepository } from './mongo/providers/radios/MongoRegionsRepository';
import { MongoStateRepository } from './mongo/providers/radios/MongoStateRepository';
import { MongoStatesRepository } from './mongo/providers/radios/MongoStatesRepository';

export const RADIOS_REGION = 'radiosRegionProvider,';
export const radiosRegionProvider = {
  provide: RADIOS_REGION,
  useFactory: () => {
    return new MongoRadioRepository();
  },
};

export const STATES = 'stateProvider,';
export const stateProvider = {
  provide: STATES,
  useFactory: () => {
    return new MongoStateRepository();
  },
};

export const ALL_STATES = 'allStateProvider,';
export const allStateProvider = {
  provide: ALL_STATES,
  useFactory: () => {
    return new MongoStatesRepository();
  },
};

export const REGION = 'regionProvider,';
export const regionProvider = {
  provide: REGION,
  useFactory: () => {
    return new MongoRegionRepository();
  },
};

export const ALL_REGIONS = 'allRegionProvider,';
export const allRegionProvider = {
  provide: ALL_REGIONS,
  useFactory: () => {
    return new MongoRegionsRepository();
  },
};
