import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/createUserInput';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async singUp(createUserInput: CreateUserInput) {
    const { email, password, role } = createUserInput;

    const finUser = await this.userRepository.findOne({ where: { email } });

    if (finUser) {
      throw new UnauthorizedException('이미 존재하는 유저 입니다');
    }
    const hashedPaswword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      email,
      password: hashedPaswword,
      role,
    });
    const result = await this.userRepository.save(user);
    return result;
  }

  async allUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async deletUser(userID: number) {
    await this.userRepository.delete(userID);
  }
}
