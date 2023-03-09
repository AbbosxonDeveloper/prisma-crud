import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateBankDto {

    @IsString()
    @Length(1, 80)
    @Transform(({value} ) => value.trim())
    @IsNotEmpty()
    name: string;

    @IsNumber()
    id?: number
}
