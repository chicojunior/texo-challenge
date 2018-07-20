import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  perecivel: boolean;
  unidadeMedida: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  back() {
    this.router.navigate(['itens/list']);
  }

}
