import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPhones'
})
export class searchPhonesPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value.filter(p => p.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);

  }//transform

}//searchPhonesPipe
