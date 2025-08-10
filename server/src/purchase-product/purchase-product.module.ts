import { Module } from '@nestjs/common';
import { PurchaseProductService } from './purchase-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseProductEntity } from 'src/entities/purchaseProduct.entity';

@Module({
  providers: [PurchaseProductService],
  imports:[TypeOrmModule.forFeature([PurchaseProductEntity])]
})
export class PurchaseProductModule {}
