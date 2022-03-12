import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketsComponent } from './markets/markets.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { DetailComponent } from './detail/detail.component';
import { SearchPipe } from './filtros/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarketsComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    FavoritosComponent,
    DetailComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
