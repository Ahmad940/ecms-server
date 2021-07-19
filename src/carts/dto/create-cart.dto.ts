import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  author: string;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ description: 'Product Id return here' })
  @IsNotEmpty()
  product: string;
}
