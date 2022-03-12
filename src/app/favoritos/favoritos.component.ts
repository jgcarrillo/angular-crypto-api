import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styles: [],
})
export class FavoritosComponent implements OnInit {
  constructor(private FavoritosService: FavoritosService) {}

  ngOnInit(): void {}

  vaciarLista() {
    this.FavoritosService.vaciarLista();
  }

  getFavoriteCoins() {
    return this.FavoritosService.getFavoriteCoins();
  }

  deleteFavorita(coin: any) {
    this.FavoritosService.deleteCoin(coin);
  }
}
