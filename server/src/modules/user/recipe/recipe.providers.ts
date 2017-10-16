import { Connection } from 'mongoose';
import { RecipeSchema } from './recipe.schema';

export const recipeProviders = [
  {
    provide: 'RecipeModelToken',
    useFactory: (connection: Connection) => connection.model('Recipe', RecipeSchema),
    inject: ['DbConnectionToken'],
  },
];
