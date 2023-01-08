import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from '../entity/user.role';

@InputType()
export class LoginUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
