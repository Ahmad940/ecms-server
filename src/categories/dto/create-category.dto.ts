import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({
    required: false,
    description: 'This field is optional',
  })
  @IsOptional()
  description: string;
}
