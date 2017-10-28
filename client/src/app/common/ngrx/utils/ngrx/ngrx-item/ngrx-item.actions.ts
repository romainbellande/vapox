import { Action } from '@ngrx/store';

export interface ActionsList {
  LOAD: string;
  LOAD_SUCCESS: string;
  LOAD_FAIL: string;
}

export class NgrxItemActions implements ActionsList {
  protected base = `[${ this.itemName.toUpperCase() }] `;
  public LOAD = this.get('Load');
  public LOAD_SUCCESS = this.get('Load success');
  public LOAD_FAIL = this.get('Load fail');

  constructor(protected itemName: string) {}

  protected get(value): string {
    return this.base + value;
  }
}

