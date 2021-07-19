import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  noInStock: number;

  @ApiProperty()
  @IsNotEmpty()
  productImage: string;

  author: string;
}
