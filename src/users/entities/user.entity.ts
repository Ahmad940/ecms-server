import { Gender } from '../enums/gender.enum';
import { Role } from '../enums/role.enum';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
@Unique(['email'])
@Index(['id', 'email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Index()
  id: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  email: string;

  @CreateDateColumn()
  dob: Date;

  @Column({ enum: Gender, nullable: false })
  gender: string;

  @Column({ enum: Role, nullable: false, default: Role.USER })
  role: string;

  @Column({ nullable: false, default: false })
  isBanned: boolean;

  @Column({ nullable: false, default: false })
  isSuspended: boolean;

  @Column({ nullable: false })
  @Exclude()
  password: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @CreateDateColumn({ nullable: false })
  updatedAt: Date;

  @DeleteDateColumn({})
  deletedAt: Date;

  @BeforeInsert() beforeInsert = () => {
    this.email = this.email.toLowerCase();
  };
}
