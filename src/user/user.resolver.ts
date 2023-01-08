import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUserInput';

import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async creatrUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.userService.singUp(createUserInput);
  }
  @Mutation(() => User)
  async deletUset(@Args('userId', { type: () => Int }) userId: number) {
    await this.userService.deletUser(userId);
    return 'delete';
  }
  @Query(() => [User])
  async allUser() {
    return this.userService.allUser();
  }
}
