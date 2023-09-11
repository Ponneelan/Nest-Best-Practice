import { Injectable } from '@nestjs/common';
import { CreateCommanDto } from './dto/create-comman.dto';
import { UpdateCommanDto } from './dto/update-comman.dto';

@Injectable()
export class CommanService {
  create(createCommanDto: CreateCommanDto) {
    return 'This action adds a new comman';
  }

  findAll() {
    return `This action returns all comman`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comman`;
  }

  update(id: number, updateCommanDto: UpdateCommanDto) {
    return `This action updates a #${id} comman`;
  }

  remove(id: number) {
    return `This action removes a #${id} comman`;
  }
}
