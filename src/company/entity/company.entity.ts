import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/entity/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity('company')
export class Company {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  companyId: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  country: string;

  @Field(() => String)
  @Column()
  region: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.company)
  user: User;
}
