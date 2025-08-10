import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { PaymentModule } from './payment/payment.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseProductModule } from './purchase-product/purchase-product.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [join(__dirname, "**", "*.entity.js")]
,
        synchronize: true,
      }),
      ProductsModule,
      PaymentModule,
      PurchaseModule,
      PurchaseProductModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
