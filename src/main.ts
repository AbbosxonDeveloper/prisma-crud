import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.useGlobalPipes(new ValidationPipe());

  const config = app.get(ConfigService);

  const host = config.getOrThrow<string>('app.host');
  const port = config.getOrThrow<number>('app.port');

  await app.listen(port, host);
}
bootstrap();
