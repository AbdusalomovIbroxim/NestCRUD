import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Загружаем переменные из .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // Используем PORT из .env или 3000 по умолчанию
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
