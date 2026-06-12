import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { logger2 } from './middleware/logger2.middleware';

@Module({
  imports: [UserModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }

  //   configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes(CatController);
  // }

  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes({ path: 'cat', method: RequestMethod.GET });
  // }



  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes({
  //     path: 'abcd/*splat',
  //     method: RequestMethod.ALL,
  //   });
  // }

  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).exclude({ path: 'cat', method: RequestMethod.GET })
  //     .forRoutes(CatController)
  // }

  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware, logger2)
  //     .forRoutes(CatController)
  // }
}
