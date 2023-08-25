import IUseCase from '../../../../core/IUseCase';
import { IGetRegionByIdData } from '../../data/IGetRegionByIdData';
import { RegionEntity } from '../../entities/RegionEntity';

export type RequestDTO = {
  regionId: string;
};

export type ResponseDTO = RegionEntity;

export class GetRegionByIdUseCase implements IUseCase<RequestDTO, ResponseDTO> {
  constructor(private readonly getRegionByIdData: IGetRegionByIdData) {}

  async execute({ regionId }: RequestDTO): Promise<ResponseDTO> {
    if (regionId === '' || regionId === null) {
      return null;
    }

    const { getRegionByIdData } = this;
    const region = await getRegionByIdData.getRegionById({ regionId });

    if (!region) {
      return null;
    }

    return region;
  }
}
