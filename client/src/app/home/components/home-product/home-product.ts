import { Component, input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-product',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './home-product.html',
})
export class HomeProduct {
  product = input.required<Product>()

}
