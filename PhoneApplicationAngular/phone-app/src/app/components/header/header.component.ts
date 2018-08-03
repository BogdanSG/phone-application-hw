import { Component, OnInit } from '@angular/core';

import {CatalogService} from "../../services/catalog.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchObject: any;

  constructor(private CatalogService: CatalogService) {

    this.searchObject = this.CatalogService.getSearchObject();

  }//constructor

  ngOnInit() {

  }//ngOnInit

}//HeaderComponent
