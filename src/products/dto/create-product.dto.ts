import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { User } from '../../users/entities/user.entity';

export class CreateProductDto {
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsInt()
  noInStock: number;

  @IsNotEmpty()
  productImage: string;

  author: User;
}
