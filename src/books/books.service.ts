import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Book, BookDocument } from './books.model';
import { CreateBookDTO, UpdateBookDTO } from './books.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(payload: CreateBookDTO): Promise<BookDocument> {
    const book = new this.bookModel(payload);
    return await book.save();
  }

  async getById(_id: Types.ObjectId): Promise<BookDocument> {
    return await this.bookModel.findById(_id).exec();
  }

  async getAll(): Promise<BookDocument[]> {
    return await this.bookModel.find({}).exec();
  }

  async update(payload: UpdateBookDTO): Promise<BookDocument> {
    return await this.bookModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  async delete(_id: Types.ObjectId) {
    return await this.bookModel.findByIdAndDelete(_id).exec();
  }
}
