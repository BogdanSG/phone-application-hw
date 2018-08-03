import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPhonese'
})
export class sortPhonesePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let resultPhones = [];

    if(args === 'name'){

      resultPhones = value.sort( ( left , right )=>{

        if( left.name > right.name ){
          return 1;
        }//if
        else if( left.name === right.name ){
          return 0;
        }//else if

        return -1;

      } );

    }//if
    else if(args === 'age'){

      resultPhones = value.sort( ( left , right )=>{

        if( +left.age > +right.age ){
          return 1;
        }//if
        else if( +left.age === +right.age ){
          return 0;
        }//else if

        return -1;

      } );

    }//else if

    return resultPhones;

  }//transform

}//sortPhonesePipe
