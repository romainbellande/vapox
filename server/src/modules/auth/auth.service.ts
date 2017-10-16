import { Model } from 'mongoose';
import { Component, Inject, Body, Param } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { User, UserConnect, UserEndpoint } from '../../../../common/entities/user';

@Component()
export class AuthService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async createToken(userConnect: UserConnect) {
    return await this.userModel.findOne(userConnect)
      .exec()
      .then((userDoc) => {
        const expiresIn = 60 * 60, secretOrKey = 'Iet4weedEif0juer';
        const token = jwt.sign({id: userDoc.id}, secretOrKey, { expiresIn });
        return {
          expiresIn,
          token,
          userId: userDoc.id,
        };
      })
      .catch(console.error);
  }

  validateUser(userId: { id: string }): Promise<boolean> {
    return this.userModel.findOne(userId)
      .exec()
      .then(() => true)
      .catch(() => false);
  }
}