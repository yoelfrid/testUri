import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';
import { IsNumber, IsOptional } from 'class-validator/types/decorator/decorators';

@Entity()
export class Product extends BaseEntity {
    
    @IsNumber()
    @IsOptional()
    id:number
    
    productId:number
    @Column()
    userName:string

    @Column()
    description:string
    
    @Column()
    price:number
}
