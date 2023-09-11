import { PartialType } from '@nestjs/swagger';
import { CreateCommanDto } from './create-comman.dto';

export class UpdateCommanDto extends PartialType(CreateCommanDto) {}
