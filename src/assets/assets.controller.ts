import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AssetsService } from './assets.service';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from '../utils/file-upload';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }

  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './public/upload/images',
      fileFilter: fileFilter,
    }),
  )
  uploadImage(@UploadedFile() image) {
    console.log('File', image);
    return this.assetsService.create(image);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
    return this.assetsService.update(id, updateAssetDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.assetsService.remove(id);
  }
}
