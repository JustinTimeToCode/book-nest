import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Book, BookSchema } from './books.model';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';


@Module({
  imports: [MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])],
  providers: [BooksResolver, BooksService]
})
export class BooksModule {}
