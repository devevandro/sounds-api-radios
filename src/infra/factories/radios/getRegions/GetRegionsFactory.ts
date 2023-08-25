import { Inject, Injectable } from '@nestjs/common';
import { ALL_REGIONS } from '../../../../providers/injections';
import { GetRegionsUseCase } from '../../../../domain/radios/useCases/getRegions/GetRegionsUseCase';
import { IGetregionsData } from '../../../../domain/radios/data/IGetRegionsData';

@Injectable()
export class GetRegionsFactory extends GetRegionsUseCase {
  constructor(
    @Inject(ALL_REGIONS)
    regionsProvider: IGetregionsData,
  ) {
    super(regionsProvider);
  }
}
