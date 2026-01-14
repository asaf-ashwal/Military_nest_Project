import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    // @InjectRepository(Users)
    // private usersRepository: Repository<Users>
  ) {}

  

  async createUser({ email, password, username, role }: Users): Promise<Users> {
    const DbUser = await this.findOneByNameAndPass(username, password);
    if (DbUser) throw 'User alrdy exist';
    // TO - CREAPT ;
    const creaptedPassword = password;
    const res = this.usersRepository.save({
      email,
      password: creaptedPassword,
      username,
      role: role || 'soldier',
    });
    console.log(res);
    return res;
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOneByNameAndPass(
    username: string,
    password: string,
  ): Promise<Users | null> {
    return this.usersRepository.findOneBy({ username, password });
  }
  findOne(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
