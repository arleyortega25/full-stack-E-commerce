import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CheckoutDto } from '../../shared/models/checkout';

@Injectable({
  providedIn: 'root'
})
export class Payment {
  private readonly http= inject(HttpClient)
  private readonly baseUrl = 'http://localhost:3000/payment'

  checkout(checkoutDto : CheckoutDto){}
}
