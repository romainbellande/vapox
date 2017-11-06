import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
         MatOptionModule,
         MatSelectModule,
         MatListModule,
         MatSidenavModule,
         MatTabsModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { PageComponent,
         CompListComponent,
         CompFormComponent } from './components';

const modules = [
  AngularFontAwesomeModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  FormsModule,
  ReactiveFormsModule
];

const components = [
  PageComponent,
  CompFormComponent,
  CompListComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...modules
  ],
  declarations: [...components],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule { }
