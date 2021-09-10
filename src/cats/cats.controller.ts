/* cats.controller.ts */

import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';
import { ListAllEntities } from './dtos/list-all-entities';
import { Response } from 'express';
import { CatsServiceService } from './service/catsservice.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsServiceService) {}
  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create({ name: '2333', sex: '1111', age: 99 });
  }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`;
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.delete({ _id: id });
  }

  @Get('list2')
  findAll2(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return this.catsService.findAll();
  }
}
