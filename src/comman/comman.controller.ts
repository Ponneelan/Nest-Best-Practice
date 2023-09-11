import { Controller } from '@nestjs/common';
import { CommanService } from './comman.service';

@Controller('comman')
export class CommanController {
  constructor(private readonly commanService: CommanService) {}
}
