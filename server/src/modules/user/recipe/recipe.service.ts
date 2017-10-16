import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { RecipeCreate, Recipe, RecipeEndpoint } from '../../../../../common/entities/recipe';

import { Body, Param } from '@nestjs/common';

import { User } from '../../../../../common/entities/user';

@Component()
export class RecipeService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>,
    @Inject('RecipeModelToken') private readonly recipeModel: Model<Recipe>) {}

  async create(userId: string, recipeCreate: RecipeCreate): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(recipeCreate);
    return await createdRecipe.save((err) => {
    }).then((recipe) => {
      this.userModel.findById(userId).then((user) => {
        user.recipes.push(recipe);
        user.save();
      });
      return recipe;
    });
  }

  async find(@Param() param): Promise<Recipe> {
    return await this.recipeModel.findById(param[RecipeEndpoint.id]).exec();
  }

  async findAll(userId: string): Promise<Recipe[]> {
    const user = await this.userModel.findById(userId).populate('recipes').exec();
    return user.recipes;
  }
}
