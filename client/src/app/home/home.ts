import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Navbar } from '../shared/components/navbar/navbar';
import { ProductOffer } from '../shared/components/product-offer/product-offer';
import { initFlowbite } from 'flowbite';
import { Product } from '../shared/models/product';
import { PRODUCTS } from '../mock/products';
import { HomeProduct } from './components/home-product/home-product';
import { Footer } from '../shared/components/footer/footer';
import { ProductService } from '../core/services/product';

@Component({
  selector: 'app-home',
  imports: [ProductOffer, HomeProduct],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  constructor(private readonly productService: ProductService) {}
  products!: Product[];
  productOffers: Product[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
      this.productOffers = products.filter((product) => product.previousPrice);

      setTimeout(() => {
        initFlowbite();
      }, 100);
    });
  }
}
