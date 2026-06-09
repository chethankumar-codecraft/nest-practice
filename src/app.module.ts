import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [UserModule, CatModule],
  controllers: [AppController, CatController],
  providers: [AppService],
})
export class AppModule  { }
