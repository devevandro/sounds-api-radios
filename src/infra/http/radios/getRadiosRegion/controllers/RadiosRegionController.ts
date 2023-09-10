import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetRadiosByRegionFactory } from '../../../../factories/radios/getRadioByRegion/GetRadiosByRegionFactory';
import { GetRadiosByStateFactory } from '../../../../factories/radios/GetRadiosByStateFactory';

@ApiTags('Radios')
@Controller('radio')
export class RadiosRegionsController {
  constructor(
    private readonly getRadiosRegionFactory: GetRadiosByRegionFactory,
    private readonly getRadiosStateFactory: GetRadiosByStateFactory,
  ) {}

  @Get('region/:regionId')
  @ApiOperation({ summary: 'Get Radios By Region' })
  async getRadiosByRegion(@Param('regionId') regionId: string) {
    const response = await this.getRadiosRegionFactory.execute({ regionId });
    return response;
  }

  @Get('state/:stateId')
  async getRadiosByState(@Param('stateId') stateId: string) {
    const response = await this.getRadiosStateFactory.execute({ stateId });
    return response;
  }
}
