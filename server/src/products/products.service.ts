import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(private readonly datasource: DataSource) {}
  async getAll(): Promise<ProductEntity[]> {
    return await this.datasource.getRepository(ProductEntity).find();
  }
  async getById(id: string): Promise<ProductEntity | null> {
    return await this.datasource.getRepository(ProductEntity).findOneBy({ id });
  }
}
