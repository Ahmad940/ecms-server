import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'postgres',
    host: config.get('DB_HOST'),
    port: config.get<number>('DB_PORT'),
    username: config.get('DB_USER'),
    password: config.get('DB_PASSWORD'),
    database: config.get('DB_NAME'),
    entities: [],
    synchronize: config.get<boolean>('SYNCHRONIZE'),
    autoLoadEntities: config.get<boolean>('AUTOLOADENTITIES'),
    keepConnectionAlive: config.get<boolean>('KEEPALIVE'),
  }),
};
