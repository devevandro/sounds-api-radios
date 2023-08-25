import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetStatesFactory } from '../../../../factories/radios/getStates/GetStatesFactory';

@ApiTags('Radios')
@Controller('states')
export class StatesController {
  constructor(private readonly getStatesFactory: GetStatesFactory) {}

  @Get('/')
  @ApiOperation({ summary: 'Get All States' })
  async getStates() {
    const response = await this.getStatesFactory.execute();
    return response;
  }
}
