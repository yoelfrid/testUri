import { IsString, Length, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDTO {

    @IsNumber()
    @IsOptional()
    id:number

    @Length(2,20)
    userName:string

    @Length(1,120)
    description:string
    
    @IsNumber()
    price:number
}
