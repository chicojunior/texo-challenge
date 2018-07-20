import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Item } from '../../shared/item';

import { ItemService } from '../../shared/item.service';



@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  perecivel: boolean;
  unidadeMedida: string;
  itemForm: FormGroup;
  item: Item;
  nomeItem: string;
  quantidadeItem: number;
  precoItem: number;
  dataValidadeItem: Date;
  dataFabricacaoItem: Date;

  constructor(private router: Router, private service: ItemService) { }

  ngOnInit() {
    this.perecivel = false;
  }

  cadastraItem() {
    this.item = new Item();
    this.item.nomeItem = this.nomeItem;
    this.item.unidadeDeMedida = this.unidadeMedida;
    this.item.quantidade = this.quantidadeItem;
    this.item.preco = this.precoItem;
    this.item.perecivel = this.perecivel;
    this.item.dataValidade = this.dataValidadeItem;
    this.item.dataFabricacao = this.dataFabricacaoItem;

    this.service.salvarItem(this.item);

  }

  back() {
    this.router.navigate(['itens/list']);
  }

}
