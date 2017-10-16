import { Entity } from '../../interfaces';
import { BoosterCreate } from './booster-create.interface';

export interface Booster extends Entity, BoosterCreate {}
