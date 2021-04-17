import { Gender } from "../enums/gender.enum";
import { IsDate, IsEmail, IsEnum, Length } from "class-validator";
import { Type } from "class-transformer";

export class CreateUserDto {
  @Length(3)
  firstName: string;

  @Length(3)
  lastName: string;

  @IsEmail()
  email: string;

  @IsDate()
  @Type(() => Date)
  dob: Date;

  @IsEnum(Gender, { message: `Gender must be male or female or other` })
  gender: Gender;

  @Length(8)
  password: string;
}
