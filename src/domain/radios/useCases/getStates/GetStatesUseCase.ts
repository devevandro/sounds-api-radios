import IUseCase from '../../../../core/IUseCase';
import { IGetStatesData } from '../../data/IGetStatesData';
import { StateEntity } from '../../entities/StateEntity';

export type ResponseDTO = StateEntity[];

export class GetStatesUseCase implements IUseCase<void, ResponseDTO> {
  constructor(private readonly getStatesData: IGetStatesData) {}

  async execute(): Promise<ResponseDTO> {
    const { getStatesData } = this;
    const states = await getStatesData.getStates();

    if (!states) {
      return null;
    }

    return states;
  }
}
