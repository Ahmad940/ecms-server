import { IsNotEmpty } from 'class-validator';

export class CreateAssetDto {
  @IsNotEmpty()
  fieldname: string;

  @IsNotEmpty()
  originalname: string;

  @IsNotEmpty()
  encoding: string;

  @IsNotEmpty()
  mimetype: string;

  @IsNotEmpty()
  destination: string;

  @IsNotEmpty()
  filename: string;

  @IsNotEmpty()
  path: string;

  @IsNotEmpty()
  size: number;
}
