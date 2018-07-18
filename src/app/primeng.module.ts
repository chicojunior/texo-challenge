import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule } from 'primeng/dataview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    SidebarModule,
    DataViewModule,
    RadioButtonModule,
    InputTextModule
  ],
  exports: [
    ToolbarModule,
    SidebarModule,
    DataViewModule,
    RadioButtonModule
  ],
  declarations: []
})
export class PrimengModule { }
