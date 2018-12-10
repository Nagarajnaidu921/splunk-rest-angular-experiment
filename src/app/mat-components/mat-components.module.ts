import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSelectModule,
  MatDialogModule,
  MatTooltipModule
} from '@angular/material';

const matComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSelectModule,
  MatDialogModule,
  MatTooltipModule
];


@NgModule({
  imports: matComponents,
  exports: matComponents
})
export class MatComponentsModule { }
