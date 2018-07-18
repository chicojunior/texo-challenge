import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../shared/item';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itens: Item[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const arroz = new Item();
    arroz.nomeItem = 'Arroz';
    arroz.perecivel = false;
    arroz.preco = 3.75;
    arroz.dataFabricacao = new Date(2018, (7 - 1), 15);

    const feijao = new Item();
    feijao.nomeItem = 'Feijão';
    feijao.perecivel = false;
    feijao.preco = 5.56;
    feijao.dataFabricacao = new Date(2018, (7 - 1), 15);

    this.itens.push(arroz);
    this.itens.push(feijao);
  }

  addItem() {
    this.router.navigate(['itens/add']);
  }

}
