import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/product')
  list(): Promise<Product[]> {
    return this.appService.getProducts();
  }

  @Post('/product')
  create(@Body() product: { name: string }): Promise<Product> {
    return this.appService.createProduct(product);
  }
}
