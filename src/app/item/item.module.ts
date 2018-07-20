import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemRoutingModule } from './item-routing.module';
import { PrimengModule } from '../primeng.module';

import { ItemComponent } from './item.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
