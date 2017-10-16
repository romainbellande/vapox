import { Model } from 'mongoose';
import { Component, Inject, Body, Param } from '@nestjs/common';

import { UserCreate, User, UserEndpoint, UserConnect } from '../../../../common/entities';

@Component()
export class UserService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async create(userCreate: UserCreate): Promise<User> {
    const userCreated = new this.userModel(userCreate);
    return await userCreated.save();
  }

  async findById(userId: string): Promise<User> {
    return await this.userModel.findById(userId, 'username email').exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
