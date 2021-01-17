import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Book } from './books.model';
import { BooksService } from './books.service';
import { CreateBookDTO, UpdateBookDTO } from './books.dto';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => String)
  hello() {
    return 'Hello World';
  }

  @Query(() => Book)
  async book(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
    return await this.booksService.getById(_id);
  }

  @Query(() => [Book])
  async books() {
    return await this.booksService.getAll();
  }

  @Mutation(() => Book)
  async createBook(@Args('payload') payload: CreateBookDTO) {
    return await this.booksService.create(payload);
  }

  @Mutation(() => Book)
  async updateBook(@Args('payload') payload: UpdateBookDTO) {
    return await this.booksService.update(payload);
  }

  @Mutation(() => Book)
  async deleteBook(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
    return await this.booksService.delete(_id);
  }
}
