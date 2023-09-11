import { Module } from '@nestjs/common';
import { CommanService } from './comman.service';
import { CommanController } from './comman.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entities/comman.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Test])],
  controllers: [CommanController],
  providers: [CommanService],
})
export class CommanModule {}
