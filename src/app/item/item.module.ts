import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule
  ],
  declarations: [ItemComponent, ItemAddComponent, ItemListComponent]
})
export class ItemModule { }
