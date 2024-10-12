/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get('/')
  @ApiOperation({ summary: 'API Health' })
  async getApiHealth() {
    return {
      message: 'API is running!',
      code: 200,
    };
  }
}
