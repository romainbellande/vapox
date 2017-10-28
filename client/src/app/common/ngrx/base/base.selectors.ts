import { Base } from '../../../../../../common/entities/base';
import { EntitySelector } from '../utils/entity';

class BaseSelectors extends EntitySelector<Base> {
  constructor() {
    super('base');
  }
}

export const selectors = new BaseSelectors();
