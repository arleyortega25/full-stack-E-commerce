import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { PurchaseProductEntity } from "./purchaseProduct.entity";

@Entity()
export class PurchaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({type:'numeric',precision: 10, scale: 2})
    total: number

    @OneToMany(()=>PurchaseProductEntity, (purchaseProduct)=>purchaseProduct.purchase)
    purchaseProducts: Relation<PurchaseProductEntity[]>
}