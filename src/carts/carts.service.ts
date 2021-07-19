import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private readonly productService: ProductsService,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    let product;
    try {
      product = await this.productService.findOne(createCartDto.product);
    } catch (e) {
      throw new BadRequestException('Product not found');
    }
    if (!product) throw new BadRequestException('Product not found');
    return this.cartRepository.save(createCartDto);
  }

  findAll(): Promise<Cart[]> {
    return this.cartRepository.find();
  }

  findOne(id: string): Promise<Cart> {
    return this.cartRepository.findOne(id);
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    return this.cartRepository.update(id, updateCartDto);
  }

  remove(id: string) {
    return this.cartRepository.softDelete(id);
  }
}
