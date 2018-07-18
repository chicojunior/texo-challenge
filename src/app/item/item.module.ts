import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule } from 'primeng/dataview';
import { RadioButtonModule } from 'primeng/radiobutton';

import { ItemRoutingModule } from './item-routing.module';
import { PrimengModule } from '../primeng.module';

import { ItemComponent } from './item.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    PrimengModule
  ],
  declarations: [
    ItemComponent,
    ItemAddComponent,
    ItemListComponent
  ]
})
export class ItemModule { }
