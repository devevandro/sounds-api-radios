import { Module } from '@nestjs/common';
import { GetRadiosByRegionFactory } from '../../factories/radios/getRadioByRegion/GetRadiosByRegionFactory';
import {
  radiosRegionProvider,
  stateProvider,
  allStateProvider,
  allRegionProvider,
  regionProvider,
} from '../../../providers/injections';
import { RadiosRegionsController } from './getRadiosRegion/controllers/RadiosRegionController';
import { StateByIdController } from './getStateById/controllers/StateByIdController';
import { GetStateByIdFactory } from '../../factories/radios/getStateById/GetStateByIdFactory';
import { GetStatesFactory } from '../../factories/radios/getStates/GetStatesFactory';
import { StatesController } from './getStates/controllers/StatesController';
import { RegionsController } from './getRegions/controllers/RegionsController';
import { GetRegionsFactory } from '../../factories/radios/getRegions/GetRegionsFactory';
import { GetRegionByIdFactory } from '../../factories/radios/getRegionById/GetRegionByIdFactory';
import { RegionByIdController } from './getRegionById/controllers/RegionByIdController';
import { GetRadiosByStateFactory } from '../../factories/radios/GetRadiosByStateFactory';

@Module({
  controllers: [
    RadiosRegionsController,
    RegionByIdController,
    RegionsController,
    StateByIdController,
    StatesController,
  ],
  providers: [
    GetRadiosByRegionFactory,
    GetRadiosByStateFactory,
    radiosRegionProvider,
    GetRegionByIdFactory,
    regionProvider,
    GetRegionsFactory,
    allRegionProvider,
    GetStateByIdFactory,
    stateProvider,
    GetStatesFactory,
    allStateProvider,
  ],
})
export class RadioModule {}
