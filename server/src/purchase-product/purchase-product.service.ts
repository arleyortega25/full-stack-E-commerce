import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseProductEntity } from 'src/entities/purchaseProduct.entity';
import { Repository } from 'typeorm';
import { CreatePurchaseProductDto } from './dto/create-purchase-product.dto';


@Injectable()
export class PurchaseProductService {
    
    constructor(
        @InjectRepository(PurchaseProductEntity)
        private readonly purchaseProductRepository:Repository<PurchaseProductEntity>) {
        
    }
    async create(createPurchaseProductDto:CreatePurchaseProductDto): Promise<PurchaseProductEntity>{
        return await this.purchaseProductRepository.save(createPurchaseProductDto)
    }
}
