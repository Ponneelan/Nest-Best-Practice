import { Controller, Get, Req, Res,HttpStatus } from '@nestjs/common';
import { CommanService } from './comman.service';
import { Request, Response } from 'express';
import { ApiResponse } from 'src/helper/helper.class';
import { MessageTemplate, ResponseStatus } from 'src/helper/helper.objects';



@Controller('comman')
export class CommanController {
  constructor(private readonly commanService: CommanService) {}

  @Get('Test_Api')
  public async getResponse(@Req() req:Request, @Res() res:Response){
    const data = {
      name:"Ponneelan",
      age:26
    }
    return res.status(HttpStatus.OK).send(
      new ApiResponse(MessageTemplate.DataFount,HttpStatus.OK,ResponseStatus.Success,data)
    )
  }
}
