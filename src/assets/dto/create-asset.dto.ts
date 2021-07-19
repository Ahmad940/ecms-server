import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssetDto {
  @ApiProperty()
  @IsNotEmpty()
  fieldname: string;

  @ApiProperty()
  @IsNotEmpty()
  originalname: string;

  @ApiProperty()
  @IsNotEmpty()
  encoding: string;

  @ApiProperty()
  @IsNotEmpty()
  mimetype: string;

  @ApiProperty()
  @IsNotEmpty()
  destination: string;

  @ApiProperty()
  @IsNotEmpty()
  filename: string;

  @ApiProperty()
  @IsNotEmpty()
  path: string;

  @ApiProperty()
  @IsNotEmpty()
  size: number;
}
