import { Component, input, OnInit, output } from '@angular/core';
import { CartProduct as CPM } from '../../../shared/models/cart-product';
import { CurrencyPipe } from '@angular/common';
import {Product as PM} from '../../../shared/models/product'

@Component({
  selector: 'app-cart-product',
  imports: [CurrencyPipe],
  templateUrl: './cart-product.html',
})
export class CartProduct implements OnInit {
  
  cartProduct = input.required<CPM>();
  total: number = 0;
  updateCartEvent = output<void>()
  ngOnInit(): void {
    this.totalUpdate();
  }
  quantityUpdate(num: number) {
    let result = this.cartProduct().quantity + num;
    if (result == 0) {
      result = 1;
    }
    this.cartProduct().quantity = result;
    this.totalUpdate();
    this.updateCart()
    this.updateCartEvent.emit()
  }
  removeProduct() {
    const cartProducts: CPM[] = JSON.parse(
      localStorage.getItem('cart-products') as string
    );
    const filterCartProducts = cartProducts.filter(
      ({ product }) => product.id !== this.cartProduct().product.id
    );
    localStorage.setItem('cart-products', JSON.stringify(filterCartProducts));
    this.updateCartEvent.emit()

  }
  private totalUpdate() {
    this.total = this.cartProduct().product.price * this.cartProduct().quantity;
  }

  private updateCart() {
    const cartProducts: CPM[] = JSON.parse(
      localStorage.getItem('cart-products') as string
    );
    const filterCartProducts = cartProducts.filter(
      ({ product }) => product.id !== this.cartProduct().product.id
    );
    const updatedCartProducts = [...filterCartProducts, this.cartProduct()];
    localStorage.setItem('cart-products', JSON.stringify(updatedCartProducts));
  }
}
