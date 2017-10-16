import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { AromaCreate, Aroma, AromaEndpoint } from '../../../../../common/entities/aroma';

import { Body, Param } from '@nestjs/common';

import { User } from '../../../../../common/entities/user';

@Component()
export class AromaService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>,
    @Inject('AromaModelToken') private readonly aromaModel: Model<Aroma>) {}

  async create(userId: string, createAroma: AromaCreate): Promise<Aroma> {
    const createdAroma = new this.aromaModel(createAroma);
    return await createdAroma.save((err) => {
    }).then((aroma) => {
      this.userModel.findById(userId).then((user) => {
        user.aromas.push(aroma);
        user.save();
      });
      return aroma;
    });
  }

  async find(@Param() param): Promise<Aroma> {
    return await this.aromaModel.findById(param[AromaEndpoint.id]).exec();
  }

  async findAll(userId: string): Promise<Aroma[]> {
    const user = await this.userModel.findById(userId).populate('aromas').exec();
    return user.aromas;
  }
}
