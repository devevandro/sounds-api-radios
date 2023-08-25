import IUseCase from '../../../../core/IUseCase';
import { IGetRadiosByRegionData } from '../../data/IGetRadiosByRegion';
import { RadioEntity } from '../../entities/RadioEntity';

export type RequestDTO = {
  regionId: string;
};

export type ResponseDTO = Array<RadioEntity>;

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
