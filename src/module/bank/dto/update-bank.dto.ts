import { PartialType } from '@nestjs/mapped-types';
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";


export class UpdateBankDto {
    @IsString()
    @Length(1, 80)
    @Transform(({value} ) => value.trim())
    name?: string;

    @IsNumber()
    user_id?: number;

    @IsNumber()
    @IsNotEmpty()
    id: number
}
