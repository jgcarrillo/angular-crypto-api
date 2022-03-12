import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private favoriteCoins: any = [];

  constructor() {
    if (localStorage.getItem('coins')) {
      this.favoriteCoins = JSON.parse(localStorage.getItem('coins'));
    } else {
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('coins', JSON.stringify(this.favoriteCoins));
  }

  addToFavoritos(coinName: any) {
    if (!this.favoriteCoins.some((coin: any) => coinName.id == coin.id)) {
      this.favoriteCoins.push(coinName);
    }

    this.saveToLocalStorage();
  }

  getFavoriteCoins() {
    return this.favoriteCoins;
  }

  deleteCoin(coin: any) {
    const index = this.favoriteCoins.indexOf(coin);

    if (index > -1) {
      this.favoriteCoins.splice(index, 1);
    }

    this.saveToLocalStorage();
  }

  vaciarLista() {
    localStorage.removeItem('coins');
    this.favoriteCoins = [];
  }
}
