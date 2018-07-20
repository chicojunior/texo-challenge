import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule } from 'primeng/dataview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    SidebarModule,
    DataViewModule,
    RadioButtonModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule
  ],
  exports: [
    ToolbarModule,
    SidebarModule,
    DataViewModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule
  ],
  declarations: []
})
export class PrimengModule { }
