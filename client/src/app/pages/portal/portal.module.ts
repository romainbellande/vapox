import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { ConnectComponent } from './connect/connect.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PortalRoutingModule
  ],
  declarations: [PortalComponent, ConnectComponent, RegisterComponent]
})
export class PortalModule { }
