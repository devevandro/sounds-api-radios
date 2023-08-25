import IUseCase from '../../../../core/IUseCase';
import { IGetregionsData } from '../../data/IGetRegionsData';
import { RegionEntity } from '../../entities/RegionEntity';
export type ResponseDTO = RegionEntity[];
export declare class GetRegionsUseCase implements IUseCase<void, ResponseDTO> {
    private readonly getSRegionsData;
    constructor(getSRegionsData: IGetregionsData);
    execute(): Promise<ResponseDTO>;
}
