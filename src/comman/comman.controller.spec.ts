import { Test, TestingModule } from '@nestjs/testing';
import { CommanController } from './comman.controller';
import { CommanService } from './comman.service';

describe('CommanController', () => {
  let controller: CommanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommanController],
      providers: [CommanService],
    }).compile();

    controller = module.get<CommanController>(CommanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
