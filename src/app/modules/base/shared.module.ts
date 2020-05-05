import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { GenericGridComponent } from "./common-components/grids/generic-grid/generic-grid.component";


@NgModule({
  declarations: [
    GenericGridComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule.forRoot(),
  ],
  exports: [
    GenericGridComponent
  ]
})
export class SharedModule { }
