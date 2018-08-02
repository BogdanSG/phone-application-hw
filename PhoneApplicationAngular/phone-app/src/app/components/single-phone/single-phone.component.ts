import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../services/catalog.service";

import { ActivatedRoute} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-single-phone',
  templateUrl: './single-phone.component.html',
  styleUrls: ['./single-phone.component.css'],
  providers: [CatalogService]
})
export class SinglePhoneComponent implements OnInit {

  thumbnail: string;
  phone: any;
  phoneID: any;

  constructor(private CatalogService: CatalogService, private ActivatedRoute: ActivatedRoute) {

    this.phoneID = this.ActivatedRoute.snapshot.params['phoneID'];

  }//constructor

  ngOnInit() {

    this.CatalogService.getPhone(this.phoneID).subscribe(phone => {

      this.phone = phone;
      this.thumbnail = this.phone.images[0];

      this.jsCode();

    });

  }//ngOnInit

  addPhoneToCart(){


  }//addPhoneToCart

  setThumbnail(thumbnail){

    this.thumbnail = thumbnail;

  }//setThumbnail

  jsCode(){

    $(document).ready( ()=>{

      $('#PhonesOwlCarousel').owlCarousel({

      });

    } );

  }//jsCode

}//SinglePhoneComponent
