import { Test, TestingModule } from '@nestjs/testing';
import { MonsterGetterController } from './monster_getter.controller';

describe('MonsterGetterController', () => {
  let controller: MonsterGetterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonsterGetterController],
    }).compile();

    controller = module.get<MonsterGetterController>(MonsterGetterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
