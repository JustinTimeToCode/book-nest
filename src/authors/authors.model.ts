import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql'
import { Document, Types } from 'mongoose'

@ObjectType()
@Schema()
export class Author {
    @Field(()=> String)
    @Prop()
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({required: true})
    firstName: string;

    @Field(() => String)
    @Prop({required: true })
    lastName: string;
}

export type AuthorDocument = Author & Document;
export const AuthorSchema = SchemaFactory.createForClass(Author);