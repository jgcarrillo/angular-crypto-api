import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { FavoritosService } from '../services/favoritos.service';
import { FiltrosService } from '../services/filtros.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styles: [],
})
export class MarketsComponent implements OnInit {
  private coins: any = [];

  ngOnInit(): void {}

  constructor(
    private CryptoService: CryptoService,
    private FavoritosService: FavoritosService,
    private FilterService: FiltrosService
  ) {
    this.CryptoService.getMarkets().subscribe((res: any) => {
      console.log(res);
      this.coins = res;

      this.CryptoService.setIsLoading(false);
    });
  }

  getAllCoins() {
    return this.coins;
  }

  isLoading() {
    return this.CryptoService.getIsLoading();
  }

  addToFavoritos(coin: any) {
    this.FavoritosService.addToFavoritos(coin);
  }

  getPatron() {
    return this.FilterService.getPatron();
  }

  setPatron(event: any) {
    this.FilterService.setPatron(event.target.value);
  }
}
