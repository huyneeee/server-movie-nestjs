import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MoviesModule, MongooseModule.forRoot('mongodb://huy:huy@localhost:27017', {
    dbName: 'movies'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
