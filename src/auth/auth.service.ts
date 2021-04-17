import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private generateToken(payload: any) {
    const token = this.jwtService.sign(payload);
    return { token };
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  comparePassword(password: string, hashedPassword): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async validateUser(loginDto: LoginDto): Promise<User> {
    const { email, password } = loginDto;
    const user = await this.usersService.findOneByEmail(email);
    if (!user) throw new BadRequestException('Invalid username or password');

    const passwordMatch: boolean = await this.comparePassword(
      password,
      user.password,
    );

    if (!passwordMatch)
      throw new BadRequestException('Invalid username or password');

    return user;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto);
    const { id } = user;
    return this.generateToken({ id });
  }

  async signup(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hashPassword(createUserDto.password);

    try {
      const user = await this.usersService.create(createUserDto);
      const { id } = user;
      return this.generateToken({ id });
    } catch (e) {
      if (e.code == 23505) {
        throw new BadRequestException('Email already exist');
      } else throw new BadRequestException(e.message);
    }
  }
}
