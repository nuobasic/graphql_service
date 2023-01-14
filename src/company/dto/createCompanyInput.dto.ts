import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/entity/user.entity';

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class CreateCompanyInput {
  @Field()
  name: string;

  @Field()
  country: string;

  @Field()
  region: string;

  @Field()
  user: User;
}
