import { Module } from '@nestjs/common';
import { HealthController } from './HealthController';

@Module({
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
