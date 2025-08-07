import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Product } from './product/product';
import { PaymentSuccess } from './payment/payment-success/payment-success';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'products/:id',
    component: Product,
  },
  {
    path: 'payment/success',
    component: PaymentSuccess,
  },
];
