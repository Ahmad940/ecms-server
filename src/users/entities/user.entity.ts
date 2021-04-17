import { Gender } from '../enums/gender.enum';
import { Role } from '../enums/role.enum';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

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

  @Column({ enum: Gender })
  gender: Gender;

  @Column({ enum: Role, default: Role.USER })
  role: Role;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @CreateDateColumn({ nullable: false })
  updatedAt: Date;

  @BeforeInsert() beforeInsert = () => {
    this.email = this.email.toLowerCase();
  };
}
