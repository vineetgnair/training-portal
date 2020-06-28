import { Pipe, PipeTransform } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {
  
  transform(value: string, args: string): any {
    if (!args) {
      return value;
    }
    var re = new RegExp(args, 'gi');
    return value.replace(re, "<mark>$&</mark>");
  
  }

}
