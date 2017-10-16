import { Entity } from '../../interfaces';
import { RecipeCreate } from './recipe-create.interface';

export interface Recipe extends Entity, RecipeCreate {}
