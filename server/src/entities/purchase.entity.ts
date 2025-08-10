import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { PurchaseProductEntity } from "./purchaseProduct.entity";
import { NumericColumnTransformer } from "src/utils/columnNumericTransformer";

@Entity()
export class PurchaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({type:'numeric',precision: 10, scale: 2, transformer: new NumericColumnTransformer()})
    total: number

    @OneToMany(()=>PurchaseProductEntity, (purchaseProduct)=>purchaseProduct.purchase)
    purchaseProducts: Relation<PurchaseProductEntity[]>
}