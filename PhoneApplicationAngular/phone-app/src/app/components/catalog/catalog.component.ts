import { Component, OnInit } from '@angular/core';

import { CatalogService } from '../../services/catalog.service'
import {a} from "@angular/core/src/render3";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [CatalogService]
})
export class CatalogComponent implements OnInit {

  phones: any = [];

  constructor(private CatalogService: CatalogService) {

  }//constructor

  ngOnInit() {

    this.CatalogService.getPhones().subscribe(phones => {

      this.phones = phones;

    });

  }//ngOnInit

}//CatalogComponent
