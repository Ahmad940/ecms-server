import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, Index,
  PrimaryGeneratedColumn, Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['name'])
@Index(['id', 'name'])
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false })
  name?: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}
