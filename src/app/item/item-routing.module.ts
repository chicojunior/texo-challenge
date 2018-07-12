import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'itens',
    component: ItemComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ItemListComponent },
      { path: 'add', component: ItemAddComponent },
      { path: 'edit', component: ItemAddComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
