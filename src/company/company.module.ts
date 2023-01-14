import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';
import { Company } from './entity/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, User])],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
