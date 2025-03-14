import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    if (!term) return value;

    return value.filter(item => new RegExp(term, 'gi').test(item['question']));
  }
}
