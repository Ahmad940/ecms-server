import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AssetsService } from './assets.service';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from '../utils/file-upload';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './public/upload/images',
      fileFilter: fileFilter,
    }),
  )
  uploadImage(@UploadedFile() image, @Request() req) {
    image.author = req.user;
    console.log('File', image);
    return image;
    // return this.assetsService.create(image);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const asset = await this.assetsService.findOne(id);
    delete asset.author.password;
    return asset;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
    return this.assetsService.update(id, updateAssetDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.assetsService.remove(id);
  }
}
