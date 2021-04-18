import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
}
