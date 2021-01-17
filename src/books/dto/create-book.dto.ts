import { IsString, IsInt, IsMongoId } from 'class-validator'
import { Types } from 'mongoose'

export class CreateBookDTO {
    @IsString()
    title: string;

    @IsInt()
    copies: number;

    @IsString()
    genre: string;

    @IsMongoId()
    author: Types.ObjectId;
}