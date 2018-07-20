import { Injectable } from '@angular/core';
import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  carregaListaItens(lista: any[]) {
    const listaAtual = this.getListaLocalStorage();

    if (listaAtual) {
      lista = listaAtual;
    }
  }

  salvarItem(item: Item): void {
    const listaLocal: Item[] = JSON.parse(localStorage.getItem('listaItens'));

    if (item) {
      listaLocal.push(item);
      localStorage.setItem('listaItens', JSON.stringify(listaLocal));
    }
  }

  getListaLocalStorage() {
    const listaLocal = JSON.parse(localStorage.getItem('listaItens'));
    return listaLocal;
  }
}
