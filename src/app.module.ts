import { CatsServiceService } from './cats/service/catsservice.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsSchema } from './cats/schema/catsSchema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/demo', {
      useNewUrlParser: true,
    }),
    MongooseModule.forFeature([
      {
        name: 'Cats', // 需要个schema名称对应
        schema: CatsSchema, // 引入的schema
        collection: 'demo', // 数据库名称
      },
    ]),
  ],
  controllers: [AppController, CatsController],
  providers: [CatsServiceService, AppService],
})
export class AppModule {}
