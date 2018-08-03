import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  searchObject: any;

  constructor(private http: HttpClient) {

    this.searchObject = {
      'searchString': '',
      'sortString': 'age'
    };

  }//constructor

  getPhones(url = '/assets/phones/phones.json'){

    return this.http.get(url);

  }//getPhones

  getPhone(id: string, url = `/assets/phones/${id}.json`){

    return this.http.get(url);

  }//getPhone

  getSearchObject(){

    return this.searchObject;

  }//getSearchObject

}//CatalogService
