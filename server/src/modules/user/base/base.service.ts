import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { BaseCreate, Base, BaseEndpoint } from '../../../../../common/entities/base';

import { Body, Param } from '@nestjs/common';

import { User } from '../../../../../common/entities/user';

@Component()
export class BaseService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>,
    @Inject('BaseModelToken') private readonly baseModel: Model<Base>) {}

  async create(userId: string, createBase: BaseCreate): Promise<Base> {
    const createdBase = new this.baseModel(createBase);
    return await createdBase.save((err) => {
    }).then((base) => {
      this.userModel.findById(userId).then((user) => {
        user.bases.push(base);
        user.save();
      });
      return base;
    });
  }

  async find(@Param() param): Promise<Base> {
    return await this.baseModel.findById(param[BaseEndpoint.id]).exec();
  }

  async findAll(userId: string): Promise<Base[]> {
    const user = await this.userModel.findById(userId).populate('bases').exec();
    return user.bases;
  }

  async update(base: Base): Promise<Base> {
    return await this.baseModel.findByIdAndUpdate(
      base._id, base,
      { new: true }).then(doc => {
        return doc.save();
      });
  }

  async remove(baseId: string): Promise<Base> {
    return await this.baseModel.findByIdAndRemove(baseId);
  }
}
