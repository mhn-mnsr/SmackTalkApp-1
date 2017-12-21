import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  // transform(value, keys: string, term: string) {
  //   if (!term) return value;
  //   return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  // }

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    })
  }
}
  
