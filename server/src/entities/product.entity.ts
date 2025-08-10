import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { PurchaseProductEntity } from './purchaseProduct.entity';
import { NumericColumnTransformer } from 'src/utils/columnNumericTransformer';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 ,transformer: new NumericColumnTransformer()})
  price: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true , transformer: new NumericColumnTransformer()})
  previousPrice: number;

  @Column()
  urlImg: string;

  @Column()
  reviews: number;

  @OneToMany(()=>PurchaseProductEntity, (purchaseProduct)=>purchaseProduct.product)
  purchaseProducts: Relation<PurchaseProductEntity[]>
}


