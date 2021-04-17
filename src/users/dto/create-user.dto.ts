import { Gender } from '../enums/gender.enum';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @Length(3)
  firstName: string;

  @Length(3)
  lastName: string;

  @IsEmail()
  email: string;

  @IsDateString({}, { message: 'Invalid date' })
  dob: Date;

  @IsEnum(Gender, { message: `Gender must be male or female or other` })
  gender: Gender;

  @Length(8)
  password: string;
}
