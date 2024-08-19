import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../schemas/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async getAllUsers() {
    return this.userModel.findAll();
  }

  async findOne(id: number) {
    return this.userModel.findOne({ where: { id } });
  }
}
