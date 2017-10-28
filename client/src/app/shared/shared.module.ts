import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
         MatOptionModule,
         MatSelectModule,
         MatListModule,
         MatSidenavModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { PageComponent } from './components';

const modules = [
  AngularFontAwesomeModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  FormsModule,
  ReactiveFormsModule
];

const components = [
  PageComponent
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  declarations: [...components],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule { }
