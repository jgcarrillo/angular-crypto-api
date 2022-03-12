import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(coins: any[], patron: string): any[] {
    if (coins && coins.length) {
      return coins.filter((coin) => {
        return coin.id.toLowerCase().includes(patron.toLowerCase());
      });
    } else {
      return coins;
    }
  }
}
