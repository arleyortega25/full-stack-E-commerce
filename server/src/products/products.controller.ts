import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { get } from 'http';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {

        
    }
    @Get()
    async getAll(){
        return await this.productService.getAll()
    } 
    @Get(':id')
    async getById(@Param('id') id:string){
        return await this.productService.getById(id)
    }

}
