import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MovieDto } from 'src/movies/dto/movie.dto';
import { Movie } from 'src/schemas/movie.schema';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @Get()
  async findAll(): Promise<Movie[]> {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movie | null> {
    return this.moviesService.findOne(id);
  }

  @Post()
  async create(@Body() movieDto: MovieDto) {
    return await this.moviesService.createMovie(movieDto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.moviesService.delete(id);
  }
}
