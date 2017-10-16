import { Component } from '../../interfaces';

export interface BaseCreate extends Component {
  readonly pg: number;
  readonly vg: number;
}
