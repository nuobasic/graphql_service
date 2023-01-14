import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { UserRole } from '../user/entity/user.role';
import { Repository } from 'typeorm/repository/Repository';
import { CreateCompanyInput } from './dto/createCompanyInput.dto';
import { Company } from './entity/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(User)
    private readonly userRpository: Repository<User>,
  ) {}

  async createCompany(createCompanyInpput: CreateCompanyInput, user: User) {
    const company = new Company();

    if (user.role === UserRole.USER) {
      throw new ForbiddenException('권한이 없음');
    }

    company.name = createCompanyInpput.name;
    company.country = createCompanyInpput.country;
    company.region = createCompanyInpput.region;
    user;

    const saveCompany = await this.companyRepository.save(company);
    return saveCompany;
  }
}
