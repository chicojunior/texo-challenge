import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../shared/item';
import { ItemService } from '../../shared/item.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itens: Item[];

  constructor(private router: Router, private service: ItemService) { }

  ngOnInit() {
    this.itens = [];
    this.service.carregaListaItens(this.itens);
    console.log(this.itens);
  }

  addItem() {
    this.router.navigate(['itens/add']);
  }

}
