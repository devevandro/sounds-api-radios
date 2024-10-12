import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { Module } from '@nestjs/common';
import { RadioModule } from './infra/http/radios/RadiosModule';
import { HealthModule } from './infra/http/health/HealthModule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    HealthModule,
    RadioModule,
  ],
  providers: [],
})
export class AppModule {}
