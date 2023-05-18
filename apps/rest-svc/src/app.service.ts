import { Injectable } from '@nestjs/common';
import { Product } from './app.interface';
import { uuid } from 'uuidv4';

@Injectable()
export class AppService {
  products: Product[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }

  createProduct(product: { name: string }): Promise<Product> {
    const newProduct: Product = {
      id: uuid(),
      name: product.name,
      exp: new Date(),
    };
    this.products.push(newProduct);

    return Promise.resolve(newProduct);
  }
}
