import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

const matComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule
];


@NgModule({
  imports: matComponents,
  exports: matComponents
})
export class MatComponentsModule { }
