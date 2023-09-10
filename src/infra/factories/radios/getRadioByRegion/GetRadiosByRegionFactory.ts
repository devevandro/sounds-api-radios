import { Inject, Injectable } from '@nestjs/common';
import { GetRadiosByRegionUseCase } from '../../../../domain/radios/useCases/getRadiosByRegion/GetRadiosByRegionUseCase';
import { RADIOS_REGION } from '../../../../providers/injections';
import { IGetRadiosByRegionData } from '../../../../domain/radios/data/IGetRadiosByRegionData';

@Injectable()
export class GetRadiosByRegionFactory extends GetRadiosByRegionUseCase {
  constructor(
    @Inject(RADIOS_REGION)
    radiosRegionProvider: IGetRadiosByRegionData,
  ) {
    super(radiosRegionProvider);
  }
}
