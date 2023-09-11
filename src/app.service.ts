import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const user = process.env.DATABASE_USER;
    return user + ' Ponneelan';
  }
}
