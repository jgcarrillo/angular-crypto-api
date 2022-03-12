import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {
  private id: string;

  coin: any = {};

  constructor(
    private route: ActivatedRoute,
    private CryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
    });

    this.getCoin();
  }

  getCoin() {
    return this.CryptoService.getCoinById(this.id).subscribe((res: any) => {
      console.log(res);

      this.coin.name = res.name;
      this.coin.image = res.image.large;
      this.coin.symbol = res.symbol;
      this.coin.desc = res.description.en;
    });
  }
}
