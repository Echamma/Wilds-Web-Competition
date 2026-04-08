import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonsterGetterModule } from './monster_getter/monster_getter.module';

@Module({
  imports: [MonsterGetterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
