import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TaskModule } from './task.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      errorHttpStatusCode: 400,
    }),
  );
  await app.listen(3000);
}
bootstrap();
