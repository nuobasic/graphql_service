import { Int, Field, ObjectType } from '@nestjs/graphql';
import { Company } from '../../company/entity/company.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { UserRole } from './user.role';

@ObjectType()
@Entity('user')
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  userId: number;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => UserRole)
  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @Field(() => Date)
  @CreateDateColumn()
  createAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updateAt: Date;

  @Field(() => Date)
  @DeleteDateColumn()
  deleteAt: Date;

  @Field(() => [Company])
  @OneToMany(() => Company, (company) => company.user)
  company: Company[];
}
