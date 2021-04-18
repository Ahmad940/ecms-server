import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    try {
      return await this.usersService.findOneById(id);
    } catch (e) {
      throw new NotFoundException('User not found');
    }
  }

  @Get('/email/:email')
  async findOneByEmail(@Param('email') email: string) {
    const user: User = await this.usersService.findOneByEmail(email);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Patch('')
  @UseGuards(JwtAuthGuard)
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.user.id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.usersService.remove(id);
  }
}
