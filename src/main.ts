import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AppService } from './app.service';
import { logger2 } from './middleware/logger2.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(new LoggerMiddleware(app.get(AppService)).use);

  app.use(logger2)

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
