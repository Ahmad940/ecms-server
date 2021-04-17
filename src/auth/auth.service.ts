import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  hashPassword(password: string) {}

  comparePassword(password: string, hashedPassword) {}

  validateUser(loginDto: LoginDto) {}

  login(loginDto: LoginDto) {}

  signup(createUserDto: CreateUserDto) {}
}
