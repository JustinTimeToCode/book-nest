import { IsString } from 'class-validator';

export class CreateAuthorDTO {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}