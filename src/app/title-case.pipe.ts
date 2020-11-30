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
      if (i > 0 && this.isPreposition(words[i])) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = this.toTitleCase(words[i]);
      }
    }

    return words.join(' ');
  }

  private toTitleCase(word: string) {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string) {
    const prepositions = [
      'the',
      'of'
    ];

    return prepositions.includes(word.toLowerCase());
  }

}
