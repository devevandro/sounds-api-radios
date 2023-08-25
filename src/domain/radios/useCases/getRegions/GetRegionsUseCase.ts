import IUseCase from '../../../../core/IUseCase';
import { IGetregionsData } from '../../data/IGetRegionsData';
import { RegionEntity } from '../../entities/RegionEntity';

export type ResponseDTO = RegionEntity[];

export class GetRegionsUseCase implements IUseCase<void, ResponseDTO> {
  constructor(private readonly getSRegionsData: IGetregionsData) {}

  async execute(): Promise<ResponseDTO> {
    const { getSRegionsData } = this;
    const regions = await getSRegionsData.getRegions();

    if (!regions) {
      return null;
    }

    return regions;
  }
}
