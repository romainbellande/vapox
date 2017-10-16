import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { BoosterCreate, Booster, BoosterEndpoint } from '../../../../../common/entities/booster';

import { Body, Param } from '@nestjs/common';

import { User } from '../../../../../common/entities/user';

@Component()
export class BoosterService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>,
    @Inject('BoosterModelToken') private readonly boosterModel: Model<Booster>) {}

  async create(userId: string, createBooster: BoosterCreate): Promise<Booster> {
    const createdBooster = new this.boosterModel(createBooster);
    return await createdBooster.save((err) => {
    }).then((booster) => {
      this.userModel.findById(userId).then((user) => {
        user.boosters.push(booster);
        user.save();
      });
      return booster;
    });
  }

  async find(@Param() param): Promise<Booster> {
    return await this.boosterModel.findById(param[BoosterEndpoint.id]).exec();
  }

  async findAll(userId: string): Promise<Booster[]> {
    const user = await this.userModel.findById(userId).populate('boosters').exec();
    return user.boosters;
  }
}
