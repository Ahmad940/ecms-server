import { Gender } from '../enums/gender.enum';
import { IsDate, IsEmail, IsEnum, Length } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @Length(3)
  firstName: string;

  @ApiProperty()
  @Length(3)
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  dob: Date;

  @ApiProperty()
  @IsEnum(Gender, { message: `Gender must be male or female or other` })
  gender: Gender;

  @ApiProperty()
  @Length(8)
  password: string;
}
