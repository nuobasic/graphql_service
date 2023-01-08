import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from '../entity/user.role';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => UserRole)
  role: UserRole;
}
