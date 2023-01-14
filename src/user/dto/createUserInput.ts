import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { UserRole } from '../entity/user.role';

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => UserRole)
  role: UserRole;
}
