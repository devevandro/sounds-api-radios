import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetStateByIdFactory } from '../../../../factories/radios/getStateById/GetStateByIdFactory';

@ApiTags('Radios')
@Controller('state')
export class StateByIdController {
  constructor(private readonly getStateFactory: GetStateByIdFactory) {}

  @Get('/:stateId')
  @ApiOperation({ summary: 'Get State By ID' })
  async getStateById(@Param('stateId') stateId: string) {
    const response = await this.getStateFactory.execute({ stateId });
    return response;
  }
}
