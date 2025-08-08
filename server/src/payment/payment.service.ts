import { Injectable } from '@nestjs/common';
import { CheckoutDto } from './dto/payment.dto';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  stripe: Stripe;
  constructor() {
    this.stripe = new Stripe(process.env.SECRET_STRIPE!);
  }
  async checkout(checkoutDto: CheckoutDto) {
    const checkout = await this.stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      currency: 'USD',
      line_items: checkoutDto.data.map(({ product, quantity }) => {
        return {
          price_data: {
            currency: 'USD',
            product_data: {
              name: product.name,
              images: [product.urlImg],
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity,
        };
      }),
      success_url: 'http://localhost:4200/payment/success',
      cancel_url: 'http://localhost:4200',
    });
    const { url } = checkout;
    return {
      url,
    };
  }
}
