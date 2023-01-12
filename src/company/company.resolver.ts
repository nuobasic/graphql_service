import { Resolver } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entity/company.entity';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}
}
