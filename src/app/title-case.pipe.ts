import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return '';
    }

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
    }

    return words.join(' ');
  }

}
