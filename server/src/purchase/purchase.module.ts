import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { PurchaseEntity } from 'src/entities/purchase.entity';
import { PurchaseProductEntity } from 'src/entities/purchaseProduct.entity';
import { PurchaseProductService } from 'src/purchase-product/purchase-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService,PurchaseProductService],
  imports: [TypeOrmModule.forFeature([PurchaseEntity,PurchaseProductEntity])]
})
export class PurchaseModule {}
