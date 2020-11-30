import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return '';
    }

    const words = value.trim()
      .split(' ')
      .filter(x => x !== '');

    for (let i = 0; i < words.length; i++) {
      if (!this.isPreposition(words[i]) || i === 0) {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      } else {
        words[i] = words[i].substr(0, 1).toLowerCase() + words[i].substr(1).toLowerCase();
      }
    }

    return words.join(' ');
  }

  private isPreposition(word: string) {
    const prepositions = [
      'the',
      'of'
    ];

    return prepositions.includes(word.toLowerCase());
  }

}
