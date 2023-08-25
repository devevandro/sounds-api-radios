import * as dotenv from 'dotenv';
dotenv.config();

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './AppModule';
import { ENVIRONMENTS } from './constants/ENVIRONMENTS';
import { connectToDataBase } from './providers/mongo/connections';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (ENVIRONMENTS.NODE_ENV !== 'test') {
    const config = new DocumentBuilder()
      .setTitle('Nestjs Template Documentation')
      .setDescription('The Nestjs API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      deepScanRoutes: true,
    });
    SwaggerModule.setup('api', app, document);
  }

  await connectToDataBase();
  await app.listen(ENVIRONMENTS.PORT);

  return app;
}

export const app = bootstrap();
