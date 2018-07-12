import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item/components/item-list/item-list.component';
import { ItemAddComponent } from './item/components/item-add/item-add.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'itens',
    pathMatch: 'full'
  },
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
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
