import { Component, OnInit } from '@angular/core';
import { CartProduct } from './components/cart-product/cart-product';
import { CartProduct as CPI } from '../shared/models/cart-product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CartProduct, CurrencyPipe],
  templateUrl: './cart.html',
})
export class Cart implements OnInit {
  cartProducts: CPI[] = [];
  total: number = 0;
  ngOnInit(): void {
    this.updateCart();
  }
  updateCart() {
    const storagedProducts: CPI[] =
      JSON.parse(localStorage.getItem('cart-products') as string) || [];
    this.cartProducts = storagedProducts;

    this.total = this.cartProducts.reduce(
      (acc: number, val) => acc + val.product.price * val.quantity,
      0
    );
  }
}
