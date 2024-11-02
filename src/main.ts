import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';

import { AppModule } from './AppModule';
import { ENVIRONMENTS } from './constants/ENVIRONMENTS';
import { connectToDataBase } from './providers/mongo/connections';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await connectToDataBase();
  await app.listen(ENVIRONMENTS.PORT);
}
bootstrap();
