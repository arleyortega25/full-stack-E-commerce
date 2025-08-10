import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseEntity } from 'src/entities/purchase.entity';
import { PurchaseProductService } from 'src/purchase-product/purchase-product.service';
import { Repository } from 'typeorm';
import { SavePurchaseDto } from './dto/save-purchase.dto';
import { CreatePurchaseProductDto } from 'src/purchase-product/dto/create-purchase-product.dto';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(PurchaseEntity)
    private readonly purchaseRepository: Repository<PurchaseEntity>,
    private readonly purchaseProductService: PurchaseProductService,
  ) {}
  async save(savePurchaseDto: SavePurchaseDto) {
    const { total, data } = savePurchaseDto;
    const purchase = await this.purchaseRepository.save({ total });
    const purchaseProducts = data.map((dto) => {
      return {
        ...dto,
        purchase: {
          id: purchase.id,
        },
      };
    });


    this.savePurchaseProducts(purchaseProducts)

    return {
      message: 'Purchase saved Successfully',
    };
  }
  private async savePurchaseProducts(data: CreatePurchaseProductDto[]) {
    for (const dto of data) {
      await this.purchaseProductService.create(dto);
    }
  }
}
