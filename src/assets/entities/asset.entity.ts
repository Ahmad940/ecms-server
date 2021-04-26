import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => User, (user) => user.id, {
    cascade: true,
  })
  author: User;

  @Column({ nullable: false })
  fieldname: string;

  @Column({ nullable: false })
  originalname: string;

  @Column({ nullable: false })
  encoding: string;

  @Column({ nullable: false })
  mimetype: string;

  @Column({ nullable: false })
  destination: string;

  @Column({ nullable: false })
  filename: string;

  @Column({ nullable: false })
  path: string;

  @Column({ type: 'int', nullable: false })
  size: number;

  @CreateDateColumn()
  createdAt: Date;
}
