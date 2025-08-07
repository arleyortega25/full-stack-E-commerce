import { Component, input, OnInit } from '@angular/core';
import { Product as PM } from '../shared/models/product';
import { PRODUCTS } from '../mock/products';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../core/services/product';
import { CartProduct as CPM } from '../shared/models/cart-product';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product.html',
})
export class Product implements OnInit {
  constructor(private readonly productService: ProductService) {}
  id = input<string>('');
  product?: PM;
  ngOnInit(): void {
    this.productService.getById(this.id()).subscribe((product) => {
      this.product = product;
    });
  }
  addToCart() {
    const cartProducts: CPM[] =
      JSON.parse(localStorage.getItem('cart-products') as string) || [];
    const matched = cartProducts.find(
      ({ product, quantity }) => product.id === this.id()
    );
    if (matched) {
      matched.quantity++;
    } else {
      cartProducts.push({ product: this.product!, quantity: 1 });
    }
    localStorage.setItem('cart-products', JSON.stringify(cartProducts));
  }
}
