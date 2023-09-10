import IUseCase from '../../../../core/IUseCase';
import {
  IGetRadiosByRegionData,
  Result,
  Params,
} from '../../data/IGetRadiosByRegionData';

export type RequestDTO = Params;

export type ResponseDTO = Result;

export class GetRadiosByRegionUseCase
  implements IUseCase<RequestDTO, ResponseDTO>
{
  constructor(private readonly getRadiosByRegionData: IGetRadiosByRegionData) {}

  async execute({ regionId }: RequestDTO): Promise<ResponseDTO> {
    const { getRadiosByRegionData } = this;
    const radios = await getRadiosByRegionData.getRadiosByRegion({ regionId });

    if (!radios) {
      return null;
    }

    return radios;
  }
}
