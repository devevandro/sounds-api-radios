import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetRegionsFactory } from '../../../../factories/radios/getRegions/GetRegionsFactory';

@ApiTags('Radios')
@Controller('regions')
export class RegionsController {
  constructor(private readonly getRegionsFactory: GetRegionsFactory) {}

  @Get('/')
  @ApiOperation({ summary: 'Get All Regions' })
  async getRegions() {
    console.log('get-regions');
    const response = await this.getRegionsFactory.execute();
    return response;
  }
}
