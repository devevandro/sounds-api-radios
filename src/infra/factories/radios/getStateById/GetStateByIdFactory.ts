import { Inject, Injectable } from '@nestjs/common';
import { STATES } from '../../../../providers/injections';
import { GetStateByIdUseCase } from '../../../../domain/radios/useCases/getStateById/GetStateByIdUseCase';
import { IGetStateByIdData } from '../../../../domain/radios/data/IGetStateByIdData';

@Injectable()
export class GetStateByIdFactory extends GetStateByIdUseCase {
  constructor(
    @Inject(STATES)
    allStateProvider: IGetStateByIdData,
  ) {
    super(allStateProvider);
  }
}
