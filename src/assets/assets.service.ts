import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';

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

  findOne(id: string) {
    return `This action returns a #${id} asset`;
  }

  update(id: string, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: string) {
    return this.assetRepository
      .createQueryBuilder()
      .delete()
      .from(Asset)
      .where('id = :id', { id })
      .execute();
  }
}
