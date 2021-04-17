import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    const user: User[] = await this.userRepository.find();
    user.forEach((u: User) => delete u.password);
    return user;
  }

  findOneById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(user: User): Promise<User> {
    return this.userRepository.remove(user);
  }
}
