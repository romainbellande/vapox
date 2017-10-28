import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { Link } from '../../../common/interfaces';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() public sidenav: MatSidenav;
  public links: Link[];

  constructor() { }

  ngOnInit() {
    this.links = [
      { label: 'Recipes', url: '/recipe' },
      { label: 'Bases', url: '/' },
      { label: 'Boosters', url: '/booster' },
      { label: 'Aromas', url: '/aroma' }
    ];
  }

}
