import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { PurchaseProductEntity } from './purchaseProduct.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  previousPrice: number;

  @Column()
  urlImg: string;

  @Column()
  reviews: number;

  @OneToMany(()=>PurchaseProductEntity, (purchaseProduct)=>purchaseProduct.product)
  purchaseProducts: Relation<PurchaseProductEntity[]>
}


