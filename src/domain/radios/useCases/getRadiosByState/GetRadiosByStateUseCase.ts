import IUseCase from '../../../../core/IUseCase';
import {
  IGetRadiosByStateData,
  Result,
  Params,
} from '../../data/IGetRadiosByStateData';

export type RequestDTO = Params;

export type ResponseDTO = Result;

export class GetRadiosByStateUseCase
  implements IUseCase<RequestDTO, ResponseDTO>
{
  constructor(private readonly getRadiosByStateData: IGetRadiosByStateData) {}

  async execute({ stateId }: RequestDTO): Promise<ResponseDTO> {
    const { getRadiosByStateData } = this;
    const radios = await getRadiosByStateData.getRadiosByState({ stateId });

    if (!radios) {
      return null;
    }

    return radios;
  }
}
