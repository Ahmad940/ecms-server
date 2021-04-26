import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';
import { unlink } from 'fs';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
  ) {}

  create(createAssetDto: CreateAssetDto) {
    return this.assetRepository.save(createAssetDto);
  }

  findAll() {
    return this.assetRepository.find();
  }

  findOne(id: string): Promise<Asset> {
    return this.assetRepository.findOne(id, { relations: ['author'] });
  }

  update(id: string, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  async remove(id: string) {
    const asset: Asset = await this.findOne(id);
    if (!asset) throw new NotFoundException('Asset not found');

    unlink(asset.path, (err) => {
      if (err) throw new BadRequestException(err.message);
    });

    return this.assetRepository
      .createQueryBuilder()
      .delete()
      .from(Asset)
      .where('id = :id', { id })
      .execute();
  }
}
