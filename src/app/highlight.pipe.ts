import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, args: string): unknown {
    if (!args) { return value; }
    const re = new RegExp(args, 'gi'); // Global and case-insensitive search
    return value.replace(re, "<mark>$&</mark>");
  }

}
