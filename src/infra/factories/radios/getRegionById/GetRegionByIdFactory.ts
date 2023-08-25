import { Inject, Injectable } from '@nestjs/common';
import { REGION } from '../../../../providers/injections';
import { GetRegionByIdUseCase } from '../../../../domain/radios/useCases/getRegionById/GetRegionByIdUseCase';
import { IGetRegionByIdData } from '../../../../domain/radios/data/IGetRegionByIdData';

@Injectable()
export class GetRegionByIdFactory extends GetRegionByIdUseCase {
  constructor(
    @Inject(REGION)
    regionProvider: IGetRegionByIdData,
  ) {
    super(regionProvider);
  }
}
