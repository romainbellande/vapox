import { Component, OnInit, Input } from '@angular/core';

import { Component as C } from '../../../../../../common/interfaces/component.interface';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.scss']
})
export class CompListComponent implements OnInit {
  @Input() public components: C[];
  constructor() { }

  ngOnInit() {}

  public getPrice(comp: C): number {
    return Math.round((comp.price * 100 / comp.ml) * 100) / 100;
  }
}
