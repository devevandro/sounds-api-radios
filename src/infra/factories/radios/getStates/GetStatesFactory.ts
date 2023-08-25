import { Inject, Injectable } from '@nestjs/common';
import { ALL_STATES } from '../../../../providers/injections';
import { GetStatesUseCase } from '../../../../domain/radios/useCases/getStates/GetStatesUseCase';
import { IGetStatesData } from '../../../../domain/radios/data/IGetStatesData';

@Injectable()
export class GetStatesFactory extends GetStatesUseCase {
  constructor(
    @Inject(ALL_STATES)
    statesProvider: IGetStatesData,
  ) {
    super(statesProvider);
  }
}
