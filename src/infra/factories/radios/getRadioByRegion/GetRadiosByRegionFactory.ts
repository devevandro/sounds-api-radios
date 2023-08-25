import { Inject, Injectable } from '@nestjs/common';
import { GetRadiosByRegionUseCase } from '../../../../domain/radios/useCases/getRadiosByRegion/GetRadiosByRegionUseCase';
import { RADIOS_REGION } from '../../../../providers/injections';
import { IGetRadiosByRegionData } from '../../../../domain/radios/data/IGetRadiosByRegion';

@Injectable()
export class GetRadiosByRegionFactory extends GetRadiosByRegionUseCase {
  constructor(
    @Inject(RADIOS_REGION)
    radiosRegionProvider: IGetRadiosByRegionData,
  ) {
    super(radiosRegionProvider);
  }
}
