import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

@Module({
    controllers: [CatController],
    providers: [CatService],
    exports: [CatService]
})
export class CatModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware,)
            .forRoutes('/');    
    }
}
