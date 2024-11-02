import { Inject, Injectable } from '@nestjs/common';
import { GetRadiosByRegionUseCase } from '../../../domain/radios/useCases/getRadiosByRegion/GetRadiosByRegionUseCase';
import { RADIOS_REGION } from '../../../providers/injections';
import { IGetRadiosByStateData } from '../../../domain/radios/data/IGetRadiosByStateData';
import { GetRadiosByStateUseCase } from '../../../domain/radios/useCases/getRadiosByState/GetRadiosByStateUseCase';

@Injectable()
export class GetRadiosByStateFactory extends GetRadiosByStateUseCase {
  constructor(
    @Inject(RADIOS_REGION)
    radiosRegionProvider: IGetRadiosByStateData,
  ) {
    super(radiosRegionProvider);
  }
}
