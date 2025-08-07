import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { ProductEntity } from './product.entity';
import { PurchaseEntity } from './purchase.entity';

@Entity()
export class PurchaseProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  total: number;

  @Column()
  quantity: number;

  @ManyToOne(()=> ProductEntity, (product)=>product.purchaseProducts)
  product:Relation<ProductEntity>
  @ManyToOne(()=> PurchaseEntity, (purchase)=>purchase.purchaseProducts)
  purchase:Relation<PurchaseEntity>
}
