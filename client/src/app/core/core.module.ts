import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';

import { SharedModule } from '../shared/shared.module';

import { GlobalWrapperComponent,
         HeaderComponent,
         SidenavComponent } from './components';

import { BaseService,
         BoosterService,
         UserService } from './services';

const components = [
  GlobalWrapperComponent
];

const services = [
  CookieService,
  BaseService,
  BoosterService,
  UserService
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ...components
  ],
  exports: [...components],
  providers: [
    ...services
  ]
})
export class CoreModule { }
