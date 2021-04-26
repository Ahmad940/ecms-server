import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateCartDto {
  author: User;
  product: Product;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  productID: string;
}
