import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetRadiosByRegionFactory } from '../../../../factories/radios/getRadioByRegion/GetRadiosByRegionFactory';

@ApiTags('Radios')
@Controller('radio-region')
export class RadiosRegionsController {
  constructor(
    private readonly getRadiosRegionFactory: GetRadiosByRegionFactory,
  ) {}

  @Get('/:regionId')
  @ApiOperation({ summary: 'Get Radios By Region' })
  async getRadiosByRegion(@Param('regionId') regionId: string) {
    const response = await this.getRadiosRegionFactory.execute({ regionId });
    return response;
  }
}
