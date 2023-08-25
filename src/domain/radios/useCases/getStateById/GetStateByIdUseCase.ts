import IUseCase from '../../../../core/IUseCase';
import { IGetStateByIdData } from '../../data/IGetStateByIdData';
import { StateEntity } from '../../entities/StateEntity';

export type RequestDTO = {
  stateId: string;
};

export type ResponseDTO = StateEntity;

export class GetStateByIdUseCase implements IUseCase<RequestDTO, ResponseDTO> {
  constructor(private readonly getStateByIdData: IGetStateByIdData) {}

  async execute({ stateId }: RequestDTO): Promise<ResponseDTO> {
    if (stateId === '' || stateId === null) {
      return null;
    }

    const { getStateByIdData } = this;
    const state = await getStateByIdData.getStateById({ stateId });

    if (!state) {
      return null;
    }

    return state;
  }
}
