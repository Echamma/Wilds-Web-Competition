import { Test, TestingModule } from '@nestjs/testing';
import { MonsterGetterService } from './monster_getter.service';

describe('MonsterGetterService', () => {
  let service: MonsterGetterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonsterGetterService],
    }).compile();

    service = module.get<MonsterGetterService>(MonsterGetterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
