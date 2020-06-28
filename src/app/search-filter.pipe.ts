import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    let searchQuery = args.toLowerCase();
    return value.filter(item => {
      return item.name.toLowerCase().includes(searchQuery);
    })
  }

}
