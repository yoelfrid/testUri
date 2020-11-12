import { Controller, Get, HttpException, HttpStatus, Post, UsePipes, ValidationPipe, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './product.entity';
import { create } from 'domain';

@Controller('product')
export class ProductController {

    constructor(private readonly ProductServ:ProductService){}

    [x: string]: any;

    @Get('all')
    public async getProducts(): Promise<[]> {
        const products = await this.productService.getProducts();
        if(products){
        return products;
        }
        // return products;
        if(!products){
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
            // return products;
    }
}

    @Get(':id')
    getProduct(@Param('id') id:number) {
    }

    }
    // @Post()
    // @UsePipes(ValidationPipe){
    // async create(@Body() createProductDTO:CreateProductDTO):Promise<UserEntity>{
    //     return await this.ProductServ.createProduct(createProductDTO);
    // }
    
    @Post()
    async create(@Body() createProductDTO:CreateProductDTO):Promise<Product>{
        return await this.ProductServ.createProduct(usertoCreate);
    }

    
}
