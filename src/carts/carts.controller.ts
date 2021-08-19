import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCartDto: CreateCartDto, @Request() req) {
    createCartDto.author = req.user.id;
    return this.cartsService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartsService.update(id, updateCartDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/check')
  removeUserCart(@Request() req) {
    const user = req.user.id;
    console.log('User id', user);
    return this.cartsService.removeUserCartItem(user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(id);
  }
}
