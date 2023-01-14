import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GetUser } from '../user/decorator/user.decorator';
import { User } from '../user/entity/user.entity';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './dto/createCompanyInput.dto';
import { Company } from './entity/company.entity';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation(() => [Company])
  async createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
    @GetUser('user') user: User,
  ) {
    return await this.companyService.createCompany(createCompanyInput, user);
  }
}
