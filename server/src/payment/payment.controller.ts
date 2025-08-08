import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CheckoutDto } from './dto/payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {
        
    }
  @Post('checkout')
  async checkout(@Body() checkoutDto: CheckoutDto) {
    return await this.paymentService.checkout(checkoutDto) 
  }
}
