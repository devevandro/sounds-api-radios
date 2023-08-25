import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { Module } from '@nestjs/common';
import { RadioModule } from './infra/http/radios/RadiosModule';

@Module({
  imports: [ConfigModule.forRoot(), ScheduleModule.forRoot(), RadioModule],
  providers: [],
})
export class AppModule {}
