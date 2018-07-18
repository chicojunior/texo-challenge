import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  faCoffee = faCoffee;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back() {
    console.log('clicked');
    this.location.back();
  }

}
