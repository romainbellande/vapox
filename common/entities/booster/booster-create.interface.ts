import { Component } from '../../interfaces';

export interface BoosterCreate extends Component {
  readonly nicotine: number;
  readonly pg: number;
  readonly vg: number;
}
