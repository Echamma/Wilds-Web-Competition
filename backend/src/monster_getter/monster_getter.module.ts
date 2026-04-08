import { Module } from '@nestjs/common';
import { MonsterGetterService } from './monster_getter.service';
import { MonsterGetterController } from './monster_getter.controller';

@Module({
  providers: [MonsterGetterService],
  controllers: [MonsterGetterController]
})
export class MonsterGetterModule {}
