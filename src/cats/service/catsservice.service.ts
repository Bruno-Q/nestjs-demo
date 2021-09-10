/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CatsServiceService {
  private readonly cats: Cat[] = [];

  constructor(@InjectModel('Cats') private readonly catsModel) {}

  create(cat: Cat) {
    const model = new this.catsModel(cat);
    return model.save();
  }

  update(cat1: Cat, cat2: Cat) {
    const result = this.catsModel.updateOne(cat1, cat2);
    return result.save();
  }

  delete(json) {
    const result = this.catsModel.deleteOne(json);
    return result;
  }

  findAll(): Cat[] {
    return this.catsModel.find().exec();
  }
}
