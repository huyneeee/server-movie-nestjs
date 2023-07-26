import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { MovieDto } from 'src/movies/dto/movie.dto';
import { Movie } from 'src/schemas/movie.schema';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private readonly movieModel: Model<Movie>) { }

  async findAll(): Promise<Movie[]> {
    return await this.movieModel.find().exec();
  }

  async findOne(id: string): Promise<Movie | null> {
    return this.movieModel.findOne({ _id: id }).exec();
  }

  async createMovie(movieDto: MovieDto): Promise<Movie> {
    const createMovie = new this.movieModel(movieDto);
    return await createMovie.save();
  }

  async delete(id: string) {
    const deletedCat = await this.movieModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}