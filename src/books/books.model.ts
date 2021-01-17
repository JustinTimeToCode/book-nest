import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Document, Types } from 'mongoose'

@ObjectType()
@Schema()
export class Book {
    @Field(()=> String)
    @Prop()
    _id: Types.ObjectId;

    @Field(()=> String)
    @Prop({required: true})
    title: string;

    @Field(()=> ID)
    @Prop({required: true})
    author: Types.ObjectId;

    @Field(()=> Int)
    @Prop({required: true})
    copies: number;

    @Field(()=>String)
    @Prop({required: true})
    genre: string;

}

export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book);