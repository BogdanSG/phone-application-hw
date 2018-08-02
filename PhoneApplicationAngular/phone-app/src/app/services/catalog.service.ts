import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) {

  }//constructor

  getPhones(url = '/assets/phones/phones.json'){

    return this.http.get(url);

  }//getPhones

  getPhone(id: string, url = `/assets/phones/${id}.json`){

    return this.http.get(url);

  }//getPhone

}//CatalogService
