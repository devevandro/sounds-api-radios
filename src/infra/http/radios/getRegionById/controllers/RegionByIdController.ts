import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetRegionByIdFactory } from '../../../../factories/radios/getRegionById/GetRegionByIdFactory';

@ApiTags('Radios')
@Controller('region')
export class RegionByIdController {
  constructor(private readonly getRegionFactory: GetRegionByIdFactory) {}

  @Get('/:regionId')
  @ApiOperation({ summary: 'Get Region By ID' })
  async getRegionById(@Param('regionId') regionId: string) {
    const response = await this.getRegionFactory.execute({ regionId });
    return response;
  }
}
